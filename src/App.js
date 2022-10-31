/* eslint-disable */

import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
import './App.css';
import Chats from './routes/Chats';
import Find from './routes/Find';
import Main from './routes/Main';
import More from './routes/More';
import Profile from './component/Profile';
import Chatting from './routes/Chatting';
import Login from './Login';
import { useEffect, useState } from 'react';
import { authService } from './fbase';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faGoogle, faGithub )
import { onAuthStateChanged } from "firebase/auth";
import AppRouter from './AppRouter';

function App() {

  //로그인관련
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null)

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      console.log(user);
      if (user) {
        //User is signed in
        setIsLoggedIn(user);
        setUserObj(user);
        // const uid = user.uid;

      } else {
        //User is signed out
        setIsLoggedIn(false);
      }
      setInit(true);
    });   
  }, [])
  console.log(authService.currentUser);

  return (
    <div>
        {init ? (
          <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj}/>) : "initializing…"}
    </div>
  );
}

export default App;
