const seneca = require('seneca')();

seneca.add({role: 'math', cmd: 'sum'}, function (msg, respond) {
  var sum = msg.left + msg.right;
  respond(null, {answer: sum})
});

// 下面两条消息都匹配 role: math, cmd: sum

seneca.act({role: 'math', cmd: 'sum', left: 1.5, right: 2.5}, console.log);
seneca.act({role: 'math', cmd: 'sum', left: 1.5, right: 2.5, integer: true}, console.log);

setTimeout(() => {
  seneca.add({role: 'math', cmd: 'sum', integer: true}, function (msg, respond) {
    var sum = Math.floor(msg.left) + Math.floor(msg.right);
    respond(null, { answer: sum })
  });

  // 下面这条消息同样匹配 role: math, cmd: sum
  seneca.act({role: 'math', cmd: 'sum', left: 1.5, right: 2.5}, console.log);

  // 但是，也匹配 role:math,cmd:sum,integer:true
  // 但是因为更多属性被匹配到，所以，它的优先级更高
  seneca.act({role: 'math', cmd: 'sum', left: 1.5, right: 2.5, integer: true}, console.log)
}, 100);


/*
 定义的 Action 模式都是唯一了，它们只能触发一个函数，模式的解析规则如下：
 更多我属性优先级更高
 若模式具有相同的数量的属性，则按字母顺序匹配
 规则被设计得很简单，这使得你可以更加简单的了解到到底是哪个模式被匹配了

 a: 1, b: 2 优先于 a: 1， 因为它有更多的属性；
 a: 1, b: 2 优先于 a: 1, c: 3，因为 b 在 c 字母的前面；
 a: 1, b: 2, d: 4 优先于 a: 1, c: 3, d:4，因为 b 在 c 字母的前面；
 a: 1, b:2, c:3 优先于 a:1, b: 2，因为它有更多的属性；
 a: 1, b:2, c:3 优先于 a:1, c:3，因为它有更多的属性。
 */
