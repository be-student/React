const Router = require('koa-router');
const api = new Router();
const posts = require('./posts');

// api.get('/test', (ctx) => {
//   ctx.body = 'text성공';
// });

api.use('/posts', posts.routes());

module.exports = api;
