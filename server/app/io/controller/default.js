// {app_root}/app/io/controller/default.js
'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async rejoin() {
      const { ctx } = this;
      const message = ctx.args;
      console.log('rejoin', ctx.args);
      await ctx.socket.emit('getrejoin', { id: 1, comments: {}, get: message });
    }
    async like() {
      const { ctx } = this;
      const message = ctx.args;
      console.log('like:', ctx.args);
      await ctx.socket.emit('getlike', { id: 0, like: 20000, get: message });
    }
    async comment() {
      const { ctx } = this;
      const message = ctx.args;
      console.log('comment', ctx.args);
      await ctx.socket.emit('getcomment', { id: 0, data: 'comment', name: 'userName' });
    }
  }
  return Controller;
};
