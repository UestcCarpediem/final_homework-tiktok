# api document

接口文档

## 获取视频流

```javascript
url: /api/getVideoList
methon: GET
response:
[{
    'id': 1,
    author: 'w3.org',
    url: 'https://media.w3.org/2020/08/ml-workshop/virtual-character-web-meeting.mp4',
    desc: 'virtual-character-web-meeting.mp4',
    tags: [
    'mc', 'course',
    ],
    likes: 10000,
    comments: 20000,
}]
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