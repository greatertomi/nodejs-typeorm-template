import { TestFactory } from './factory';

describe('Testing the users route', () => {
  const factory: TestFactory = new TestFactory();

  beforeEach((done) => {
    factory.init().then(done);
  });

  afterEach((done) => {
    factory.close().then(done);
  });

  it('should be able to fetch all users', async () => {
    const response = await factory.app.get('/users');
    expect(response.status).toBe(200);
  });
});
