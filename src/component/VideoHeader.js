import React, { Component } from 'react'
import DuoIcon from '@material-ui/icons/Duo';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import SearchIcon from '@material-ui/icons/Search';
import "./VideoHeader.css";
import { Link } from 'react-router-dom';

export default class VideoHeader extends Component {
    render() {
        return (
            <ul className="videoHeader">
                <li className = "videoHeader_live">
                <Link to = "/live" style={{color: '#666666'}} activeStyle={{color: '#666666'}}>
                    <DuoIcon fontSize="large" />
                    <p>直播</p>
                    </Link>
                </li>
                <li className = "videoHeader_video">
                    <HowToRegIcon fontSize="large" />
                    <p>关注</p>
                </li>
                
                <li className = "videoHeader_search">
                    <SearchIcon fontSize="large" />
                    <p>搜索</p>
        </li>
            </ul>
        )
    }
}
