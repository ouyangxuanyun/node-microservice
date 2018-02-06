const seneca = require('seneca')();

seneca
    .client({type: 'tcp'})
    .act('role:math,cmd:sum,left:10,right:20', console.log)