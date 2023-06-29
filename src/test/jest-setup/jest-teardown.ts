import { removePostgresContainer } from '../../utils/docker';

export default async () => {
  await removePostgresContainer();
};
