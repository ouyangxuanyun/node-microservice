const seneca = require('seneca')();

seneca
    .use('math')
    .listen({type: 'tcp', pin: 'role:math',host:'localhost'})

/*

 默认情况下， client/listen 并未指定哪些消息将发送至哪里，只是本地定义了模式的话，会发送至本地的模式中，否则会全部发送至服务器中，我们可以通过一些配置来定义哪些消息将发送到哪些服务中，你可以使用一个 pin 参数来做这件事情。

 让我们来创建一个应用，它将通过 TCP 发送所有 role:math 消息至服务，而把其它的所有消息都在发送至本地：
 */
