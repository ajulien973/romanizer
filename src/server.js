const Hapi = require('@hapi/hapi');
const Good = require('@hapi/good');
const romanizer = require('./controllers/romanizer');

const consoleLogging = {
  plugin: Good,
  options: {
    ops: {
      interval: 1000
    },
    reporters: {
      consoleReporter: [
        {
          module: '@hapi/good-squeeze',
          name: 'Squeeze',
          args: [{ response: '*', log: '*' }]
        },
        { module: '@hapi/good-console' },
        'stdout'
      ]
    }
  }
};

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  await server.register([consoleLogging]);

  await server.start();
  console.log('Server running on %ss', server.info.uri);

  server.route({
    method: 'GET',
    path: '/deromanize',
    handler: romanizer.deromanize
  });
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
