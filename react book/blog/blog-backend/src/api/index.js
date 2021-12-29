// const Router = require('koa-router');
// const api = new Router();
// const posts = require('./posts');

import Router from 'koa-router';
import posts from './posts/index.js';

const api = new Router();
// api.get('/test', (ctx) => {
//   ctx.body = 'text성공';
// });

api.use('/posts', posts.routes());

export default api;
