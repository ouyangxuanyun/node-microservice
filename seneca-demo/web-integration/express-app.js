const Express = require('express');
const Seneca = require('seneca')({timeout:2000});
const SenecaWeb = require('seneca-web');
const expressAdapter = require('seneca-web-adapter-express');
const Router = Express.Router;
const context = new Router();
const app = Express();

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

Seneca
  .use(SenecaWeb, senecaWebConfig)
  .use('math')
  .use('api')

// http://localhost:3000/api/calculate/sum?left=1&right=2&timeout=ok
// http://localhost:3000/api/calculate/sum?left=1&right=2