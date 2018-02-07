const seneca = require('seneca')();
seneca.use('entity');

let product = seneca.make('product');
product.name = 'Apple';
product.price = 1.99;

product.save$(console.log)