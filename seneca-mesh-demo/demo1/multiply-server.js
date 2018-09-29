const seneca = require('seneca')();

seneca
  .add('role:multiply', function (msg, respond) {
    respond(null, {ok: msg.left * msg.right});
  })
  .use('mesh', {
    // bases: ['127.0.0.1'],
    // port: 3003,
    pin: 'role:multiply'
  });
