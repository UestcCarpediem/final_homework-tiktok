import Mock from 'mockjs'


export default Mock.mock('/api/video/getlist','get',{
    "videolist|10":[{   			//生成一个如下格式的数据
        "id|+1":0,
        "url|1":["https://v-cdn.zjol.com.cn/276985.mp4","//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4","https://v-cdn.zjol.com.cn/280443.mp4","https://v-cdn.zjol.com.cn/276990.mp4"],
		//url是数组里的随机一项
        "author":"@cname",//名字为随机中文名
        "musice":"@csentence(1,6)",//歌曲名为长度在一到六之间的句子
        "like":"@integer(1,10000)",//1到10000之间的整数
        "comment":"@integer(1,10000)",
        "desc":"@csentence(5,15)",
        "share":"@integer(1,10000)"
	}]
})
