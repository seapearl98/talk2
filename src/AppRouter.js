import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './component/Profile';
import Login from './Login';
import Logout from './Logout';
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
            <Route path='/more' element={<More/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/chatting' element={<Chatting userObj={userObj}/>}/>
            <Route path='/myprofile' element={<MyProfile userObj={userObj}/>}/>

          </>
        ) :( //안되어있을 경우
        <Route path='/' element={<Login/>}/> 
        )}
        </Routes>
    </BrowserRouter>
  )
}
