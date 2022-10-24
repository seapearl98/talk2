import React from 'react'
import '../styles/Profile.scss'
import Header from './Header'
import { FaUser, FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull, FaCog, FaComment,FaSearch, FaEllipsisH, FaAddressBook, FaQrcode, FaMobileAlt, FaEnvelope, FaPenAlt, FaTimes} from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Profile() {

const location = useLocation();
console.log(location);

const navigate= useNavigate();
if(location.state === undefined){ //로케이션 스테이트값이 정의되지않을때
  navigate('/'); //홈으로 이동. ->리다이렉트 기능
}

const {images,name,texts,bgImg} = location.state; 
  return (
    <div className='chats'>
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
                <h1>Find</h1>
                <div className="left-item"><Link to='/'><FaTimes/></Link></div>
                <div className="right-item"><FaUser/></div>
            </div>
        </div>
        <main className='main_profile'>
            <section className="background">
                <img src={bgImg} alt={bgImg}/>
                <h2 className="blind">My profile background image</h2>
            </section>
            <section className="profile">
                <h2 className="blind">My profile info</h2>
                <div className="profile_img empty"><img src={images} alt={images} /></div>
                <div className="profile_cont">
                    <span className="profile_name">{name}</span>
                    <input type="mail" className="profile_email" placeholder={texts}/>
                    <ul className="profile_menu">
                        <li>
                            <Link to={'/chatting'} state={{images,name,texts}}>
                                <span className="icon">
                                    <FaComment/>
                                </span>
                                My Chatroom
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <span className="icon">
                                    <FaPenAlt/>
                                </span>
                                Edit Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </div>
  )
}
