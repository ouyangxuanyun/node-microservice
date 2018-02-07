const seneca = require('seneca')();

seneca
    .use('math')
    .listen({type: 'tcp', pin: 'role:math'})
