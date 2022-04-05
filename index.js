const Hapi = require('@hapi/hapi');
const exampleRoute = require('./example-route');
const serverConfig = require('./server-config');

const init = async () => {
  const server = Hapi.server(serverConfig);
  server.route(exampleRoute);
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
