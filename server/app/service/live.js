'use strict';

const Service = require('egg').Service;

class LiveService extends Service {
  // 从数据库获取视频列表
  async getLiveList(vid = 0) {
    const vdata = [{
      id: vid,
      author: 'cctv',
      url: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
      desc: 'cctv - 1',
      createdAt: '2021-01-26T19:30:22.420Z',
      updatedAt: '2020-01-30T10:24:26.590Z',
      like: 0,
      comment: 0,
      share: 0,
    }, {
      id: vid + 1,
      author: 'cctv',
      url: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
      desc: 'cctv - 2',
      createdAt: '2021-01-26T19:30:22.420Z',
      updatedAt: '2020-01-30T10:24:26.590Z',
      like: 0,
      comment: 0,
      share: 0,
    }];
    return vdata;
  }
}


module.exports = LiveService;
