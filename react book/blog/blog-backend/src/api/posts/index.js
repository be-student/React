import * as postCtrl from './posts.ctrl.js';
import Router from 'koa-router';
import checkLoggedIn from '../../lib/checkLoggedIn.js';

const posts = new Router();

// const printInfo = (ctx) => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//   };
// };

// posts.get('/', printInfo);
// posts.post('/', printInfo);
// posts.get('/:id', printInfo);
// posts.delete('/:id', printInfo);
// posts.put('/:id', printInfo);
// posts.patch('/:id', printInfo);
posts.get('/', postCtrl.list);
posts.post('/', checkLoggedIn, postCtrl.write);

const post = new Router();
// posts.get('/:id', postCtrl.checkObjectId, postCtrl.read);
post.get('/:id', checkLoggedIn, postCtrl.read);
// posts.delete('/:id', postCtrl.checkObjectId, postCtrl.remove);
post.delete('/:id', checkLoggedIn, postCtrl.checkOwnPost, postCtrl.remove);
//posts.put('/:id', postCtrl.replace);
// posts.patch('/:id', postCtrl.checkObjectId, postCtrl.update);
post.patch(
  '/:id',
  postCtrl.getPostById,
  postCtrl.checkOwnPost,
  postCtrl.update,
);

post.use('/:id', postCtrl.getPostById, post.routes());

export default posts;
