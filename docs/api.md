# api document

接口文档

## 获取视频流

获取播放视频的接口

```javascript
url: /api/video/getlist
methon: GET
request:
{
    id=numbser // 默认为1即可，视频的编号，用于区分已经看到的位置,不填服务器默认为0
}
response:
[{
    'id': 0,
    author: 'w3.org',
    url: 'https://media.w3.org/2020/08/ml-workshop/virtual-character-web-meeting.mp4',
    desc: 'virtual-character-web-meeting.mp4',
    tags: [
    'mc', 'course',
    ],
    like: 10000,
    comment: 20000,
    share: 1000,
}]
```

## 获取直播流

获取直播流数据的接口
```javascript
url: /api/live/getlist
methon: GET
request:
{
    id=number // 默认为1即可，直播流的编号，用于区分已经看到的位置,不填服务器默认为0
}
response:
[{
    id: 0,
    author: 'cctv',
    url: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
    desc: 'cctv - 1',
    createdAt: '2021-01-26T19:30:22.420Z',
    updatedAt: '2020-01-30T10:24:26.590Z' ,
    like: 0,
    comment: 0,
    share: 0,
}]
```

## Socket.io

```javascript
url: /ws
```

## 报错

```javascript
response:
{
    code: 404,
    msg: 'url invalid',
    request: Object,
}
```