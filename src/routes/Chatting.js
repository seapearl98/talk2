import React from 'react'
import '../styles/Chatting.scss'
import { FaPlane, FaWifi,FaMoon, FaBluetoothB, FaBatteryFull, FaCog, FaAngleLeft, FaSearch, FaBars, FaSmile, FaMicrophone, FaPlus } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import ChattingList from '../item/ChattingList';

export default function Chatting() {

    const location = useLocation();
    console.log(location);
    
    const {images,name,texts} = location.state; 
  return (
    <div >
        <header className='header'>
            <div className="status-bar">
                <div className="left-item">
                <FaPlane/>
                <FaWifi/>
                </div>
                <div className="center-item">
                    <span>15</span>:<span>33</span>
                </div>
                <div className="right-item">
                    <FaMoon/>
                    <FaBluetoothB/>
                    <span><span>100</span>%</span>
                    <FaBatteryFull/>
                </div>
            </div>
            <div className="title-bar">
                <h1>{name}</h1>
                <div className="left-item"><Link to='/chats'><FaAngleLeft/></Link></div>
                <div className="right-item"><a href="#"><FaSearch/><FaBars/></a></div>
            </div>
        </header>
        <main className='chatting'>
            <span className="date_info">Monday,Octover 17, 2022</span>
            <div className="chat_box my">
                <span className="chat">Hello</span>
                <span className="chat">Hello! This is a test message.</span>
                <span className="chat">This is a test message.</span>
                <span className="chat_time"><span>16</span>:<span>30</span></span>
            </div>
            {/* <!-- other --> */}
            <div class="chat_box other">
                <div class="other_box">
                    <a href="#"><span class="profile_img empty"><img src={images} alt={images} /></span></a>
                    <span class="profile_name">{name}</span>
                </div>
                <span class="chat">And this is an answer</span>
                <span class="chat">And this is an answer And this is an answer</span>
                <span class="chat">And this is an answer</span>
                <span class="chat_time"><span>17</span>:<span>33</span></span>
            </div>
        </main>
        {/* <!-- footer --> */}
        <footer>
            <span className="plus_btn"><Link><FaPlus/></Link></span>
            <form action="/" method="post">
                <fieldset className="text_box">
                    <legend className="blind">채팅 입력창</legend>
                    <label for="chatting" className="blind">채팅 입력</label>
                    <input type="text"  id="chatting" className="text_field"/>
                    <span className="emoticon_btn"><a href="#"><FaSmile/></a></span>
                    <span className="voice_btn"><a href="#"><FaMicrophone/></a></span>
                </fieldset>
            </form>
        </footer>
    </div> 
  )
}
