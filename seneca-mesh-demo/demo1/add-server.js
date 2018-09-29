const seneca = require('seneca')();

seneca
  .add('role:add', function (msg, respond) {
    respond(null, {ok: msg.left + msg.right});
  })
  .use('mesh', {
    // host: '127.0.0.1',
    port: 39100,
    isbase: true,
    pin: 'role:add'
  });
