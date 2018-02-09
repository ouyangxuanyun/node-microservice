const seneca = require('seneca')({log: 'test'});

seneca
  .use('mesh')
  // send a message out into the network
  // the network will know where to send format:hex messages
  // .act({format: 'hex', color: 'red'}, function (err, out) {
  //   // prints #FF0000
  //   console.log(out.color);
  // });
  .ready(function () {
    this.act({format: 'hex', color: 'red'}, function (err, out) {
        console.log(out.color);
        this.close()
      })
  })