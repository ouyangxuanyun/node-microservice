const seneca = require('seneca')();

seneca
    .use(require('./math'))
    .act('role:math,left:1,right:2', console.log)