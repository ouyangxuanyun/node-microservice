const seneca = require('seneca')();
// require('seneca')()
//   .use('nsq-transport')
//   .add('foo:two',function(args,done){ done(null,{bar:args.bar}) })
//   // .client( {type:'nsq',pin:'foo:one,bar:*'} )
//   // .listen( {type:'nsq',pin:'foo:two,bar:*'} )
//   .listen( {type:'nsq',pin:'foo:two,bar:*'} )


seneca
  .use('color')
  .listen({type:'tcp'})

seneca
  .client({type:'tcp'})
  .act('color:red')
