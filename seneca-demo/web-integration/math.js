module.exports = function math(options) {
    this.add('role:math,cmd:sum', function sum(msg, respond) {
        respond(null, {answer: msg.left + msg.right})
    })

    this.add('role:math,cmd:sum,timeout:ok', function sum(msg, respond) {
        setTimeout(() => {
            respond(null, {answer: msg.left + msg.right})
        },3000)
        // throw new Error('my own err')
    })

    this.add('role:math,cmd:product', function product(msg, respond) {
        respond(null, {answer: msg.left * msg.right})
    })

    this.wrap('role:math', function (msg, respond) {
        msg.left = Number(msg.left).valueOf()
        msg.right = Number(msg.right).valueOf()
        this.prior(msg, respond)
    })
}

process.on('Error', (err) => {
    console.log(`EEEEEEEEEEEEE`);
    console.log(err)
});
