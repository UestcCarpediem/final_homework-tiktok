import Video from "./pages/Video";
import "./App.css";
import axios from "axios";
import "./mock/index.js";
import React, { Component } from 'react';






export default class App extends Component {
  state = {
    list:[]
  }
  
  componentDidMount(){
      axios.get('http://tiktok.kingfish404.cn/api/video/getlist')
      .then((res)=>{
          console.log(res.data);
          if (res) {
             this.setState({
              
              list: res.data
            });
        }
      })

    }
  render() {
    
    return (
      <div className="app">
      
        {
          this.state.list.map((value,key)=>{
            return<li  key={key} className="app__videos">
              <Video
              id = {value.id}
              url = {value.url}
              channel = {value.author}
              song = {value.musice}
              likes = {value.like}
              messages = {value.comment}
              description = {value.desc}
              shares = {value.share}
        />
              </li>
          })
        }
    </div>
    )
  }
}
