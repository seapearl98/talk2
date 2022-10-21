/* eslint-disable */

import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
import './App.css';
import Chats from './routes/Chats';
import Find from './routes/Find';
import Header from './component/Header';
import Main from './routes/Main';
import More from './routes/More';
import Nav from './component/Nav';
import Profile from './component/Profile';
import Common from './styles/Common.scss'
import Info from './item/Info';
import Chatting from './routes/Chatting';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/chats' element={<Chats/>}/>
          <Route path='/find' element={<Find/>}/>
          <Route path='/more' element={<More/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/chatting' element={<Chatting/>}/>
        </Routes>
      <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
