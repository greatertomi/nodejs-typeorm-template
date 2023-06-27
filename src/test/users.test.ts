import { assert } from 'chai';

import { TestFactory } from './factory';
import { throwError } from './helper';

describe('Testing the users route', () => {
  const factory: TestFactory = new TestFactory();

  before((done) => {
    factory.init().then(done);
  });

  after((done) => {
    factory.close().then(done);
  });

  describe('GET /users', () => {
    it('should return a list of users', (done) => {
      factory.app
        .get('/users')
        .expect(200)
        .end((err, res) => {
          try {
            if (err) throwError(err);
            assert.isArray(res.body, 'Response should be an array');
            return done();
          } catch (error) {
            return done(error);
          }
        });
    });
  });
});
