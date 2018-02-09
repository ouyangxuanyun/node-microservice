const seneca = require('seneca')();

seneca
  .add('format:hex', function (msg, respond) {
    let color = 'red' === msg.color ? '#FF0000' : '#FFFFFF';
    respond({color});
  })
  .use('mesh', {
    host: 'localhost',
    port: 3000,
    isbase: true,
    // monitor: true
    pin: 'format:hex'
  });

