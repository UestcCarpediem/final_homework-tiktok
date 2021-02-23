let express = require("express");
let app = express();
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/live/list",function(req,res){
  //let json="{\"list\":[{\"url\":\"http://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8\",\"description\":\"西瓜测试直播间1\"},{\"url\":\"http://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8\",\"description\":\"西瓜测试直播间2\"}]},{}}";
  let json='{"list":[{"url":"http://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8","description":"西瓜测试直播间1"},{"url":"http://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8","description":"西瓜测试直播间2"},{"url":"http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8","description":"CCTV3"}]}';
	res.send(json);
});

app.listen(8888,'127.0.0.1');

 
console.log('Server is running at http://127.0.0.1:8888/');