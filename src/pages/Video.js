import VideoFooter from "../component/VideoFooter";
import VideoSidebar from "../component/VideoSidebar";
import "./Video.css";
import Xgplayer from 'xgplayer-react';


import React, { Component } from 'react'
import VideoHeader from "../component/VideoHeader";

let Player = null;
var endY,startY;


export default class Video extends Component {
  

  

  handleTouchStart = (e) => {
    this.startY = e.touches[0].clientY;
    console.log("开始滑动");
  }
  handleTouchMove = (e) => {
    this.endY = e.touches[0].clientY;
  }

  handleTouchEnd = (e) => {
    if(this.startY>-1 && this.endY>-1) {
      let distance = Math.abs(this.startY - this.endY);
      //console.log(distance);
      if(distance >150){
        if(this.player == null){
          console.log("error")
        }
        else
        {
          this.player.pause();
        }
      }
    }
  }

  render() {
    const {id, url, channel, song, likes, messages, description, shares} = this.props;
    let that = this;
    let config = {
      id: 'mse',
      url: url,
      width: 375,
      height: 667,
      fluid: true,
      //poster: "//s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
      loop: true,
      ignores: ['fullscreen','play','volume','pip']
    };
    console.log(url);
    
    return (
      
      <div className="video" onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd ={this.handleTouchEnd}>
      <Xgplayer className="video__player" config={config} playerInit={(player)=>{ Player = player;that.player=player }} />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar id={id} likes={likes} messages={messages} shares={shares} />
      <VideoHeader/>
    </div>
    )
  }
}

