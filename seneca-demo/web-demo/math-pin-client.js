const seneca = require('seneca')();

seneca
// 本地模式
    .add('role:math,cmd:sum', function (msg, respond) {
        respond(null, {HHHHHHH: "Hi!"})
    })

    // 发送 role:math 模式至服务
    // 注意：必须匹配服务端
    .client({type: 'tcp', pin: 'role:math',host:'localhost'})
    // .client({ type: 'tcp', pin: 'say:hello' })

    // 本地操作,首先匹配本地第五行，匹配不到再远程匹配到math-pin-server的math
    .act('role:math,cmd:test,left:999,right:999', console.log)

    // 远程操作,首先匹配本地第五行，匹配不到再远程匹配到math-pin-server的math
    .act('role:math,cmd:sum,left:1,right:2', console.log)

    // 本地操作,首先匹配本地第五行，匹配不到再远程匹配到math-pin-server的math
    .act('role:math,cmd:sum,left:111,right:222', console.log)