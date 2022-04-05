const Hapi = require('@hapi/hapi');
const exampleRoute = require('./example-route');
const serverConfig = require('./server-config');
const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { after, before, describe, it } = (exports.lab = Lab.script());

describe('Example route', () => {
  let server;

  before(async () => {
    server = Hapi.server(serverConfig);
    server.route(exampleRoute);
    await server.initialize();
  });

  it('should return correct json data', async () => {
    const res = await server.inject({ method: 'get', url: '/' });

    expect(res.statusCode).to.equal(200);
    expect(res.result.message).to.equal('Everything OK.');
  });

  after(async () => {
    await server.stop();
  });
});
