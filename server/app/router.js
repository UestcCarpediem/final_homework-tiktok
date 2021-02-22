'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/getVideoList', controller.video.getVideoList);
  router.get('/api/increaceStar', controller.video.increaceStar);
  router.get(/^.*$/i, controller.error.pageNotFound);
};
