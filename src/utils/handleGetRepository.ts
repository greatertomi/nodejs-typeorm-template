import { EntityTarget, Repository } from 'typeorm';

import envConfig from '../config/envConfig';
import dataSource from '../data-source';

const handleGetRepository = <T>(entity: EntityTarget<T>): Repository<T> => {
  const environment = envConfig.NODE_ENV || 'development';
  return environment === 'test'
    ? dataSource.TestDataSource.manager.getRepository(entity)
    : dataSource.AppDataSource.manager.getRepository(entity);
};

export default handleGetRepository;
