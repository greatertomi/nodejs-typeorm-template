/* eslint-disable no-console */
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import envConfig from './config/envConfig';
import dataSource from './data-source';
import routes from './routes';

const { PORT } = envConfig;

export const main = async () => {
  try {
    await dataSource.AppDataSource.initialize();
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(helmet());

    app.use('/', routes);

    app.use((req, res) =>
      res.status(404).send({
        message: `This route does not exist: [${req.method}] ${req.url}`
      })
    );

    app.listen(PORT, () => {
      console.log(`Server listening on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
