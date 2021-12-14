// const Koa = require('koa');

// const app = new Koa();

// // app.use(async (ctx, next) => {
// //   console.log(ctx.url);
// //   console.log(1);
// //   if (ctx.query.authorized !== '1') {
// //     ctx.status = 401; //unathorized
// //     return;
// //   }
// //   //   next().then(() => {
// //   //     console.log('END');
// //   //   });
// //   await next();
// //   console.log('END');
// // });

// // app.use((ctx, next) => {
// //   console.log(2);
// //   next();
// // });

// // app.use((ctx) => {
// //   ctx.body = 'hello world';
// // });

// app.listen(4000, () => {
//   console.log('Listening to port 4000');
// });
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());
router.get('/', (ctx) => {
  ctx.body = '홈';
});

router.get('/about', (ctx) => {
  ctx.body = '소개';
});

router.get('/about/:name', (ctx) => {
  const { name } = ctx.params;
  console.log(name);
  //name존재 유무에 따른 다른 결과
  ctx.body = name ? `${name}의 소개` : '소개';
});

router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  //id존재 유무에 따른 다른 결과
  ctx.body = id ? `포스트 #${id}의 123` : '123';
});
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
