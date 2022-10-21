/* eslint-disable */

import React, { useState, useEffect } from 'react'
import '../styles/Main.scss'
import { FaUser, FaComment,FaSearch, FaEllipsisH} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Info from '../item/Info';
import Header from '../component/Header';
import Nav from '../component/Nav';
import figureimg from '../item/figureimg.json'
import axios from 'axios';

export default function Main() {

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
<div>
    <Header/>
    <main>
        <form className="search_box">
            <fieldset className="search_inner">
                <legend className="blind">검색창</legend>
                <FaSearch/>
                <input type="search" name="search" id="search" placeholder="Find friends, chats, Plus Friends"/>
            </fieldset>
        </form>
        <section className="main_section">
            <header className='header'><h2>My Profile</h2></header>
            <ul>
            {posts.map((post,index)=>(
                                <Info 
                                key={post.id}
                                name={post.name}
                                images={figureimg[index].img} 
                                texts={texts[index].title.slice(0,30)}
                                />                 
                                ))
                                .slice([0],[1])}
            </ul>
        </section>
        <section className="main_section">
            <header className='header'><h2>Friends</h2></header>
                        <ul>
                            {posts.map((post,index)=>(
                                <Info 
                                name={post.name}
                                images={figureimg[index].img} 
                                texts={texts[index].title.slice(0,30)}
                                />
                 
                 )).slice([1],[10])}
                        </ul>
        </section>
    </main>
    <Nav/>
</div>
  )
}
