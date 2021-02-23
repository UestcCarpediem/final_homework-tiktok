'use strict';

const Controller = require('egg').Controller;

class VideoController extends Controller {
  async getVideoList() {
    const { ctx } = this;
    const vdata = await ctx.service.video.getViderList(0);
    ctx.body = vdata;
  }
}

module.exports = VideoController;
