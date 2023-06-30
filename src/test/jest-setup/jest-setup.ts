import { DataSourceOptions } from 'typeorm';

import { testDatabaseConfig } from '../../data-source';
import { setupPostgresContainer } from '../../utils/docker';

const connectionConfig: DataSourceOptions = { ...testDatabaseConfig };

export default async () => {
  if ('username' in connectionConfig) {
    await setupPostgresContainer(
      connectionConfig.username,
      connectionConfig.password as string,
      connectionConfig.port.toString()
    );
  }
};
