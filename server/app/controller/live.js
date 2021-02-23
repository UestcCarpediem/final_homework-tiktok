'use strict';

const Controller = require('egg').Controller;

class LiveController extends Controller {
  async getLiveList() {
    const { ctx } = this;
    const ldata = await ctx.service.live.getLiveList(0);
    ctx.body = ldata;
  }
}

module.exports = LiveController;
