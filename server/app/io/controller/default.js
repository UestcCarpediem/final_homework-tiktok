// {app_root}/app/io/controller/default.js
'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async rejoin(socket) {
      // 切换加入房间
      const { ctx } = this;
      const message = ctx.args[0];
      if (message) {
        const id = message.id;
        const id_old = message.id_old;
        console.log('rejoin', message);
        if (id !== null) {
          const roomId = 'room-' + String(id);
          const roomId_old = 'room-' + String(id_old);
          // console.log('#rejoin#room:' + roomId);
          socket.join(roomId);
          socket.leave(roomId_old);
          await ctx.socket.emit('getrejoin', { id: Number(id), comments: {}, get: message });
        }
      }
    }
    async like() {
      // 喜欢
      const { ctx, app } = this;
      const message = ctx.args[0];
      // console.log('like:', message);
      const id = message.id;
      if (id > 100000) {
        const vdata = await app.mysql.get('video', { id: Number(id) });
        console.log(vdata);
        vdata.like++;
        await app.mysql.update('video', vdata);
        await ctx.socket.emit('getlike', { id: Number(id), like: vdata.like, get: message });
      } else {
        const vdata = await app.mysql.get('video', { id: Number(id) });
        console.log(vdata);
        vdata.like++;
        await app.mysql.update('video', vdata);
        await ctx.socket.emit('getlike', { id: Number(id), like: vdata.like, get: message });
      }
    }
    async comment() {
      // 发布评论
      const { ctx } = this;
      const message = ctx.args[0];
      const comment = message.data;
      console.log('comment', message);
      if (message) {
        if (message.id !== null) {
          const id = message.id;
          const vdata = await app.mysql.get('video', { id: Number(id) });
          vdata.comment++;
          await app.mysql.update('video', vdata);
          const roomId = 'room-' + String(id);
          const name = message.name;
          // console.log('#comment#room:' + roomId);
          await ctx.socket.to(roomId).emit('getcomment', { id: Number(id), data: comment, name: String(name) });
        }
      } else {
        console.log('get msg failed!');
        await ctx.socket.emit('getcomment', { id: 0, data: 'error!id is empty!', get: message });
      }
    }
  }
  return Controller;
};
