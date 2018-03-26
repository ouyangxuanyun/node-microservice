const seneca = require('seneca')({timeout:10000});

// seneca.fixedargs.fatal$ = false;

seneca.add('role:math,cmd:sum', (msg, reply) => {
  console.log(111111);
  reply(null, {answer: (msg.left + msg.right)});
});
seneca.add('role:math,cmd:sum', (msg, reply) => {
  console.log(222222);
  // let now = Date.now();
  // let expires = now + 30000;
  // while ( Date.now() < expires){}
  setTimeout(() => {
    reply(null, {answer: (msg.left + msg.right)});
  },44222)
});


seneca.add('role:math, cmd:product', (msg, reply) => {
  console.log(333333);
  reply(null, {answer: ( msg.left * msg.right )});
});

// seneca.act({role: 'math', cmd: 'sum', left: 1, right: 3}, function (err,msg) {
//   console.log('okokokokokoik');
//   if (err) console.log(`uuuuuuuuuu`)
// })

seneca.act({role: 'mathss', cmd: 'sum', left: 1, right: 3, fatal$: false} , (err, res) => {
  if (err) console.log(`EEEEEEE`)
})
  // .act({role: 'math', cmd: 'product', left: 3, right: 4}, console.log);

