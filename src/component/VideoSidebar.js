import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import { Link } from 'react-router-dom';
import io from 'socket.io-client';




function VideoSidebar({ id, likes, shares, messages }) {
  
    
  const socket = io('ws://tiktok.kingfish404.cn/ws?id=0');
  console.log(socket);
  
  socket.on('connect',()=>{
    socket.send('123123');
    console.log("connect");
  })
  socket.on('getlike', (res) => {
    console.log(res)
  });

  const [liked, setLiked] = useState(false);//useState是函数式组件值，只能在函数中使用
  const LikeClick = () => {
    setLiked(true);
    console.log(id);
    console.log(socket);
    socket.emit('setlike',{id: Number(id)});
    
  };
  

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__tou" >
      <img className="mui-icon-image" src="https://i.loli.net/2021/02/23/PvByjSNsxaH8h3O.jpg"  />
      </div>
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={LikeClick}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
      <Link to="/comment" style={{color: 'white'}} activeStyle={{color: 'white'}} >
        <MessageIcon fontSize="large" />
        </Link>
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
