const IndexController = require('./IndexController');
const TestController = require('./TestController');
const indexControll = new IndexController();
const testControll = new TestController();
const router = require('koa-simple-router');
// 初始化所有的路由
module.exports = (app) => {
  app.use(router(_ => {
    _.get('/', indexControll.actionIndex());
    _.get('/index/savedata', indexControll.actionSaveData());
    _.get('/test', testControll.actionIndex());
    _.get('/index/create', indexControll.actionCreate());
  }));
}
