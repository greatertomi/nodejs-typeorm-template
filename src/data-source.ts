import { DataSource, DataSourceOptions } from 'typeorm';

import 'reflect-metadata';

import envConfig from './config/envConfig';

// Make sure to set this to false in production
const syncDatabase = true;

const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: envConfig.POSTGRES_HOST,
  port: envConfig.POSTGRES_PORT,
  username: envConfig.POSTGRES_USER,
  password: envConfig.POSTGRES_PASSWORD,
  database: envConfig.POSTGRES_DB,
  synchronize: syncDatabase,
  logging: false,
  entities: syncDatabase ? ['src/entities/**/*.ts'] : ['dist/entities/**/*.js'],
  migrations: syncDatabase ? ['src/migrations/**/*.ts'] : ['dist/migrations/**/*.js'],
  subscribers: []
};

export const testDatabaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 2345,
  username: 'root',
  database: 'test',
  password: 'easypass',
  synchronize: true,
  dropSchema: true,
  entities: syncDatabase ? ['src/entities/**/*.ts'] : ['dist/entities/**/*.js']
};

const AppDataSource = new DataSource(databaseConfig);
const TestDataSource = new DataSource(testDatabaseConfig);

export default { AppDataSource, TestDataSource };
