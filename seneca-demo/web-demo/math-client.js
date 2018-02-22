const seneca = require('seneca')();

seneca
    .client(8000,'10.192.25.91') // 客户端默认访问10101
    // .client(8000,'127.0.0.1') // 客户端默认访问10101,不要使用127.0.0.1
    .act('role:math,cmd:sum,left:1,right:2', (err, result) => {
        if (err) return console.error(err);
        console.log(result)
    })


/*
只要 client 与 listen 的端口号与主机一致，它们就可以进行通信：
seneca.client(8080) → seneca.listen(8080)
seneca.client(8080, '192.168.0.2') → seneca.listen(8080, '192.168.0.2')
seneca.client({ port: 8080, host: '192.168.0.2' }) → seneca.listen({ port: 8080, host: '192.168.0.2' })
*/
