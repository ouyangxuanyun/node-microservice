const seneca = require('seneca')();

seneca
    .use('math')
    .listen(8000,'10.192.25.91') //默认是10101,不要使用127.0.0.1