const seneca = require('seneca')();

seneca
  .add('format:hex2,color:red', function (msg, respond) {
    respond(null, {HHHHHHH: "Hi!"})
  })
  .client({pin: 'format:hex',port:3000,host:'localhost'})
  .act({format: 'hex', color: 'red'}, console.log)