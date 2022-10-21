import React from 'react'
import { FaUser, FaComment,FaSearch, FaEllipsisH} from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Nav() {

  if (window.location.path === '/profile') 
    return null; 
  return (
    <div className='tab-bar'>
        <ul>
            <li><Link to='/'><FaComment/>Friends</Link></li>
            <li><Link to='/chats'><FaUser/>Chats</Link></li>
            <li><Link to='/find'><FaSearch/>Find</Link></li>
            <li><Link to='/more'><FaEllipsisH/>More</Link></li>
        </ul>
    </div>
  )
}
