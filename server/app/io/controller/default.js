// {app_root}/app/io/controller/default.js
'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async rejoin() {
      const { ctx } = this;
      const message = ctx.args[0];
      console.log(ctx.args);
      await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
    }
    async chat() {
      const { ctx } = this;
      const message = ctx.args[0];
      console.log(ctx.args);
      await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
    }
  }
  return Controller;
};
