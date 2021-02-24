'use strict';

const Service = require('egg').Service;

class LiveService extends Service {
  // 从数据库获取视频列表
  async getLiveList(vid = 0) {
    const vdbdata = await this.app.mysql.select('live');
    // eslint-disable-next-line no-unused-vars
    const vdata = [{
      id: 10000 + Number(vid),
      author: '西瓜测试直播1',
      url: 'http://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
      desc: 'XGvideo1',
      createdAt: '2021-01-26T19:30:22.420Z',
      updatedAt: '2020-01-30T10:24:26.590Z',
      like: 0,
      comment: 0,
      share: 0,
    }, {
      id: 10000 + Number(vid) + 1,
      author: '西瓜测试直播2',
      url: 'http://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
      desc: 'XGvideo2',
      createdAt: '2021-01-26T19:30:22.420Z',
      updatedAt: '2020-01-30T10:24:26.590Z',
      like: 0,
      comment: 0,
      share: 0,
    }, {
      id: 100003 + Number(vid) + 2,
      author: 'CCTV1',
      url: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
      desc: 'cctv1',
      createdAt: '2021-01-26T19:30:22.420Z',
      updatedAt: '2020-01-30T10:24:26.590Z',
      like: 0,
      comment: 0,
      share: 0,
    }];
    vdbdata.forEach(item => {
      item.id += 100000;
    });
    return vdbdata;
  }
}

module.exports = LiveService;
