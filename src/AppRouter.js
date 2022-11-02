import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditProfile from './component/EditProfile';
import Profile from './component/Profile';
import MyBack from './item/MyBack';
import Login from './Login';
import Chats from './routes/Chats';
import Chatting from './routes/Chatting';
import Find from './routes/Find';
import Main from './routes/Main';
import More from './routes/More';
import MyProfile from './routes/MyProfile';

export default function AppRouter({isLoggedIn,userObj}) {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
        {isLoggedIn ? ( //로그인이 되어있을경우
          <>
            <Route path='/' element={<Main userObj={userObj}/>}/>
            <Route path='/profile' element={<Profile userObj={userObj}/>}/>
            <Route path='/chats' element={<Chats userObj={userObj}/>}/>
            <Route path='/find' element={<Find/>}/>
            <Route path='/more' element={<More userObj={userObj}/>}/>
            <Route path='/chatting' element={<Chatting userObj={userObj}/>}/>
            <Route path='/myprofile' element={<MyProfile userObj={userObj}/>}/>
            <Route path='/editprofile' element={<EditProfile userObj={userObj}/>}/>
            <Route path='/myback' element={<MyBack userObj={userObj}/>}/>
          </>
        ) :( //안되어있을 경우
        <Route path='/' element={<Login/>}/> 
        )}
        </Routes>
    </BrowserRouter>
  )
}
