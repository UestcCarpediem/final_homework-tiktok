'use strict';

const Service = require('egg').Service;

class VideoService extends Service {
  // 从数据库获取视频列表
  async getViderList(vid = 0) {
    const vdata = [{
      id: vid,
      author: 'w3.org',
      url: 'https://media.w3.org/2020/08/ml-workshop/virtual-character-web-meeting.mp4',
      desc: 'virtual-character-web-meeting.mp4',
      tags: [
        'mc', 'course',
      ],
      like: 10000,
      comment: 20000,
      share: 1000,
    }, {
      id: vid + 1,
      author: 'w3.org',
      url: 'https://media.w3.org/2020/08/ml-workshop/virtual-character-web-meeting.mp4',
      desc: 'virtual-character-web-meeting.mp4',
      tags: [
        'mc', 'course',
      ],
      like: 10000,
      comment: 20000,
      share: 1000,
    }];
    return vdata;
  }
}


module.exports = VideoService;
