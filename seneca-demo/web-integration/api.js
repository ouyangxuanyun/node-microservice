module.exports = function api () {
  let validOps = {sum: 'sum', product: 'product'};
  console.log('&&&&&&&&&&&');
  this.add('role:api,path:calculate', (msg, respond) => {
    console.log('**********');
    let operation = msg.args.params.operation;
    let left = msg.args.query.left;
    let right = msg.args.query.right;
    let timeout = msg.args.query.timeout
    this.act('role:math',{
      cmd: validOps[operation],
      left,
      right,
      timeout,
    }, respond);
  });

  this.add('init:api', function (msg, respond) {
    this.act('role:web',{routes:{
      prefix: '/api',
      pin:    'role:api,path:*',
      map: {
        calculate: { GET:true, suffix:'/:operation' }
      }
    }}, respond)
  })

};