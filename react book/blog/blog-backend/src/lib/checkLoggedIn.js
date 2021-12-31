const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.statsu = 401;
    return;
  }
  return next();
};

export default checkLoggedIn;
