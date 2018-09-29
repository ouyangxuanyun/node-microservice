const Seneca = require('seneca');

Seneca({log: 'test'})
  .use('mesh')
  .ready(function () {
    const seneca = this;
    console.log(`AAAAAAAAA`);
// 调用加法运算微服务
    seneca.act('role:add', {left: 3, right: 5}, (err, out) => {
      console.log(out);
      this.close();
    });
// 调用乘法运算微服务
    seneca.act('role:multiply', {left: 3, right: 5}, (err, out) => {
      console.log(out);
      this.close();
    });
  });
