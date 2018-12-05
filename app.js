console.log("取到的环境变量" ,process.env.NODE_ENV);
const Koa = require("koa");
const app = new Koa();
const config = require("./config");
const render = require('koa-swig');
const serve = require('koa-static');
const co = require('co');
const log4js = require('log4js');
const errorHandler = require("./middleware/errorHandler");
const logger = log4js.getLogger('cheese');

// 前端模板
// async await 语法糖版本
app.context.render = co.wrap(render({
  // ...your setting
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false
  varControls:["[[","]]"],
  ext: 'html',
  writeBody: false
}));

log4js.configure({
  appenders: { cheese: { type: 'file', filename: './logs/yideng.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

errorHandler.error(app,logger);
require("./controllers")(app);
app.use(serve(config.staticDir));
app.listen(config.port, () => {
  console.log("服务已启动🍺");
});
