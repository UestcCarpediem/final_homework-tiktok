'use strict';
// {app_root}/app/io/middleware/connection.js

// eslint-disable-next-line no-unused-vars
module.exports = app => {
  return async (ctx, next) => {
    const { socket } = ctx;
    // console.log('auth:', ctx.query);
    const query = ctx.query;
    const id = query.id;
    if (id !== null) {
      const roomId = 'room-' + String(id);
      console.log('#room:' + roomId);
      socket.join(roomId);
    }
    ctx.socket.to('room-' + String(id)).emit('res', 'connected!');
    await next(socket);
    // execute when disconnect.
    console.log('disconnection!');
  };
};
