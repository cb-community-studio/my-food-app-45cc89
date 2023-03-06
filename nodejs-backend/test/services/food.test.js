const assert = require('assert');
const app = require('../../src/app');

describe('\'food\' service', () => {
  it('registered the service', () => {
    const service = app.service('food');

    assert.ok(service, 'Registered the service (food)');
  });
});
