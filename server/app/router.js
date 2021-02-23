'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);

  // 获取视频列表
  router.get('/api/video/getlist', controller.video.getVideoList);

  // 获取直播流列表
  router.get('/api/live/getlist', controller.live.getLiveList);

  // websocket.io
  io.of('/ws').route('rejoin', io.controller.default.rejoin);

  io.of('/ws').route('chat', io.controller.default.chat);

  // 错误url处理
  router.get(/^.*$/i, controller.error.pageNotFound);
};
