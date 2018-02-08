const Express = require('express');
const Seneca = require('seneca')();
const SenecaWeb = require('seneca-web');
const expressAdapter = require('seneca-web-adapter-express');
const Router = Express.Router;
const context = new Router();
const app = Express();

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
