import express from 'express';
import supertest from 'supertest';
import { DataSource } from 'typeorm';

import { Server, createServer } from 'node:http';
import { createDatabase } from 'typeorm-extension';

import dataSource, { testDatabaseConfig } from '../data-source';
import routes from '../routes';

export class TestFactory {
  private _app: express.Application;
  private _connection: DataSource;
  private _server: Server;

  public get app(): supertest.SuperTest<supertest.Test> {
    return supertest(this._app);
  }

  public async init(): Promise<void> {
    await this.startup();
  }

  public async close(): Promise<void> {
    this._server.close();
    await this._connection.destroy();
  }

  private async startup(): Promise<void> {
    try {
      this._connection = dataSource.TestDataSource;
      await createDatabase({
        options: {
          type: 'postgres' as const,
          ...testDatabaseConfig
        }
      });
      await this._connection.initialize();
      this._app = express();
      this._app.use(express.json());
      this._app.use(express.urlencoded({ extended: true }));
      this._app.use('/', routes);
      this._server = createServer(this._app).listen(3010);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('testing error', error);
    }
  }
}
