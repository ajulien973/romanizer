import Hapi from '@hapi/hapi';
import Good from '@hapi/good';
import Vision from '@hapi/vision';
import Handlebars from 'handlebars';
import romanizer from './controllers/romanizer';

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

  await server.register([consoleLogging, Vision]);

  server.views({
    engines: {
      html: Handlebars
    },
    relativeTo: __dirname,
    path: 'views'
  });

  server.route({
    method: 'GET',
    path: '/deromanize/{arabicNumber}',
    handler: romanizer.deromanize
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.view('main');
    }
  });

  await server.start();
  console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
