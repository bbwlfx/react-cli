const Koa = require('koa');
const KoaPug = require('koa-pug');
const KoaRouter = require('koa-router');
const path = require('path');
const koaBody = require('koa-body');

const app = new Koa();
new KoaPug({
  app,
  debug: false,
  pretty: false,
  compileDebug: false,
  basedir: '../template',
  viewPath: path.join(__dirname, '../template')
});

const indexRouter = require('./routes/index');

const router = new KoaRouter();

router.use('', indexRouter.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(8088, (err) => {
  if(err) {
    console.error('Unable to start on port 8088', err);
    return;
  }
  console.log(`server is running on port 8088`);
});