'use strict';
// {app_root}/app/io/middleware/connection.js

// eslint-disable-next-line no-unused-vars
module.exports = app => {
  return async (ctx, next) => {
    // console.log('auth:', ctx.query);
    ctx.socket.emit('res', 'connected!');
    await next();
    // execute when disconnect.
    console.log('disconnection!');
  };
};
