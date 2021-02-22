'use strict';

const Service = require('egg').Service;

class VideoService extends Service {
  async getViderList(vid) {
    const vdata = [{
      id: vid,
      author: 'w3.org',
      url: 'https://media.w3.org/2020/08/ml-workshop/virtual-character-web-meeting.mp4',
      desc: 'virtual-character-web-meeting.mp4',
      tags: [
        'mc', 'course',
      ],
      likes: 10000,
      comments: 20000,
    }, {
      id: vid,
      author: 'w3.org',
      url: 'https://media.w3.org/2020/08/ml-workshop/virtual-character-web-meeting.mp4',
      desc: 'virtual-character-web-meeting.mp4',
      tags: [
        'mc', 'course',
      ],
      likes: 10000,
      comments: 20000,
    }];
    return vdata;
  }
}


module.exports = VideoService;
