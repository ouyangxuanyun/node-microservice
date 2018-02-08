const seneca = require('seneca')();

seneca
    .use('math')
    .listen(8000,'127.0.0.1') //默认是10101