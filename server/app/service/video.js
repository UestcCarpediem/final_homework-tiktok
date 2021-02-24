'use strict';

const Service = require('egg').Service;

class VideoService extends Service {
  // 从数据库获取视频列表
  async getViderList(vid = 0) {
    const vdbdata = await this.app.mysql.select('video');
    // console.log('vdbdata', vdbdata);
    // eslint-disable-next-line no-unused-vars
    const vdata = [{
      id: vid,
      author: 'w3.org',
      url: 'https://media.w3.org/2020/08/ml-workshop/virtual-character-web-meeting.mp4',
      desc: 'virtual-character-web-meeting',
      musice: 'popmusic-name',
      tags: [
        'mc', 'course',
      ],
      like: 10000,
      comment: 20000,
      share: 1000,
    }, {
      id: vid + 1,
      author: 'w3.org',
      url: 'https://media.w3.org/2020/08/ml-workshop/MEYER_RAUCHENSTEIN_artie_video.mp4',
      desc: 'MEYER_RAUCHENSTEIN_artie_video',
      musice: 'popmusic-name',
      tags: [
        'mc', 'course',
      ],
      like: 10000,
      comment: 20000,
      share: 1000,
    }];
    return vdbdata;
  }
}

module.exports = VideoService;
