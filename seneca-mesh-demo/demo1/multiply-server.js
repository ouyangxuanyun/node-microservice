const seneca = require('seneca')();

seneca
  .add('role:multiply', function (msg, respond) {
    respond(null, {ok: msg.left * msg.right});
  })
  .use('mesh', {
    host: 'localhost',
    port: 3001,
    isbase: true,
    pin: 'role:multiply'
  });