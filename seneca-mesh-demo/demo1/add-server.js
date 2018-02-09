const seneca = require('seneca')();

seneca
  .add('role:add', function (msg, respond) {
    respond(null, {ok: msg.left + msg.right});
  })
  .use('mesh', {
    host: 'localhost',
    port: 3000,
    isbase: true,
    pin: 'role:add'
  });