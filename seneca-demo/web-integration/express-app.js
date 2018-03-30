const Express = require('express');
const Seneca = require('seneca')({timeout:2000});
const SenecaWeb = require('seneca-web');
const expressAdapter = require('seneca-web-adapter-express');
const Router = Express.Router;
const context = new Router();
const app = Express();
const {ServerError} = require('./error_handle')

Seneca.fixedargs.fatal$ = false;
// fatal$:false 这种模式只能保证act里面throw的错误不引发fatal error,
// 而Seneca.fixedargs.fatal$ = false可以保证所有seneca默认的fatal错误不会中断nodejs process

let senecaWebConfig = {
  context: context,
  adapter: expressAdapter,
  options: {
    parseBody: false
  } // so we can use body-parser
};

app.use(require('body-parser').json({limit: '10mb'}))
  .use(context)
  .listen(3000, () => console.info(`test microservice start at 3000.`));




app.use((err, req, res, next) => {
    console.log('***************')
    console.log(err)
    console.log('***************')
    console.log(req)
    console.log('***************')
    console.log(res)
    console.log(11111,err.orig, 2222222222, err.orig.message)

    let errorSent = new ServerError(err.orig.message)
    res.status(400).json(error)
    // res.status(400).json({message: err.orig.message})
})

Seneca
  .use(SenecaWeb, senecaWebConfig)
  .use('math')
  .use('api')

// http://localhost:3000/api/calculate/sum?left=1&right=2&timeout=ok
// http://localhost:3000/api/calculate/sum?left=1&right=2