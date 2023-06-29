import express from 'express';
import supertest from 'supertest';
import { DataSource, DataSourceOptions } from 'typeorm';

import { Server, createServer } from 'node:http';

import { UserEntity } from '../entities/UserEntity';
import routes from '../routes';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  database: 'test',
  password: 'easypass',
  synchronize: true,
  entities: [UserEntity]
};

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
      this._connection = new DataSource(dataSourceOptions);
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
