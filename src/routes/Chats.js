import React, { useEffect, useState } from 'react'
import '../styles/Chats.scss'
import { FaUser, FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull, FaCog, FaComment,FaSearch, FaEllipsisH, FaAddressBook, FaQrcode, FaMobileAlt, FaEnvelope}from "react-icons/fa";
import { Link } from 'react-router-dom';
import Nav from '../component/Nav';
import axios from 'axios';
import figureimg from '../item/figureimg.json'
import ChattingList from '../item/ChattingList';


export default function Chats() {

    const [posts, setPosts] = useState([]);
    const url1 = "https://jsonplaceholder.typicode.com/users";

    const getPosts = async () => {
        try {
            const response = await axios(url1);
            setPosts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    const [texts, setTexts] = useState([]);
    const url2 = "https://jsonplaceholder.typicode.com/todos";

    const getTexts = async () => {
        try {
            const response = await axios(url2);
            setTexts(response.data.slice(0,10));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTexts();
    }, []);

  return (
  <>
    <div className="Header">
    <div className='status-bar'>
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
        <h1>Chats</h1>
        <div className="left-item">Edit</div>
        <div className="right-item"><FaCog/></div>
    </div>
    </div>
    <main>
    {/* <!-- searchbox --> */}
    <form className="search_box">
            <fieldset className="search_inner">
                <legend className="blind">검색창</legend>
                <FaSearch/>
                <input type="search" name="search" id="search" placeholder="Find friends, chats, Plus Friends"/>
            </fieldset>
    </form>
    {/* <!-- //searchbox --> */}
    <secion className="chats_main_section">
        <header className="blind"><h2>Freinds</h2></header>
        <ul>
        {posts.map((post,index)=>(
                            <ChattingList
                                key={post.id}
                                name={post.name}
                                texts={texts[index].title.slice(0,30)}
                                images={figureimg[index].img}
                            
                            />
        ))}
        </ul>
    </secion>
    {/* <!-- //main section --> */}
    {/* <!-- floatingbtn --> */}
    <div className="chat_fa_btn">
        <Link to='/'>
            <FaComment/>
        </Link>
    </div>
    {/* <!-- //floatingbtn --> */}
    </main>
    <Nav/>
  </>
  )
}
