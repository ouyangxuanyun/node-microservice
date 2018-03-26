const seneca = require('seneca')();

seneca
  .client(3000,'10.192.25.254') // 客户端默认访问10101
  // .client(8000,'127.0.0.1') // 客户端默认访问10101,不要使用127.0.0.1
  .act('role:math,cmd:sum,left:1,right:2', (err, result) => {
    if (err) return console.error(err);
    console.log(result)
  })