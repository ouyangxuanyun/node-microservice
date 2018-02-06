const seneca = require('seneca')();
const minimal_plugin = (options) => {
  console.info('***** first this:', this); // 如果用箭头函数seneca加载的时候this并不指向seneca
  console.log(options);
};
function math (options) {
  console.info('***** second this:', this);
  this.add('role:math,cmd:sum', function (msg, respond) {
    respond(null, {answer: msg.left + msg.right});
  });

  this.add('role:math,cmd:product', function (msg, respond) {
    respond(null, {answer: msg.left * msg.right});
  });
};
seneca
  .use(minimal_plugin, {foo: 'bar'})
  .use(math)
  .act('role:math,cmd:sum,left:1,right:2', (err, result, ...others) => {
    if (err) return console.error(err);
    console.log('rrrrrrr', result, others);
    // console.log('rrrrrrr',others);
  });

