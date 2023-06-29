import { setupPostgresContainer } from '../../utils/docker';

const connectionConfig = {
  username: 'root',
  password: 'easypass',
  port: 5432
};

export default async () => {
  await setupPostgresContainer(
    connectionConfig.username,
    connectionConfig.password,
    connectionConfig.port.toString()
  );
};
