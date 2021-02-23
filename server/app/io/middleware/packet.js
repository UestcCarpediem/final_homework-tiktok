'use strict';
// {app_root}/app/io/middleware/packet.js

// eslint-disable-next-line no-unused-vars
module.exports = app => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'packet received!');
    console.log('packet:', this);
    await next();
  };
};
