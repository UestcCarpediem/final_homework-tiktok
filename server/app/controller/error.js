'use strict';

const Controller = require('egg').Controller;

class ErrorController extends Controller {
  async pageNotFound() {
    const { ctx } = this;
    ctx.body = {
      code: 404,
      msg: `url:${ctx.request.url} is invalid`,
      request: ctx.request.toJSON(),
    };
  }
}

module.exports = ErrorController;
