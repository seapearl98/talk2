import React from 'react'
import '../styles/More.scss'
import { FaUser, FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull, FaCog, FaComment,FaSearch, FaEllipsisH, FaAddressBook, FaQrcode, FaMobileAlt, FaEnvelope, FaCommentAlt, FaCommentSlash, FaComments, FaSmile, FaPaintBrush, FaHandPeace, FaUserCircle, FaInfoCircle, FaUtensilSpoon, FaUtensils, FaHome, FaTv, FaPencilAlt, FaGraduationCap, FaUniregistry, FaUniversity, FaWonSign, FaVideo, FaRegSmile, FaSmileBeam, FaSmileWink, FaRegHandPeace, FaRegUserCircle} from "react-icons/fa";
import Nav from '../component/Nav';

export default function More() {
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
          <h1>More</h1>
          <div className="left-item">Edit</div>
          <div className="right-item"></div>
      </div>
      </div>
      <main>
    {/* <!-- user info --> */}
    <section className="user_info">
        <h2 className="blind">사용자 정보</h2>
        <span className="profile_img empty"></span>
        <span className="profile_info">
            <span className="profile_name">My Name</span>
            <span className="profile_email">Userid@gmail.com</span>
        </span>
        <span className="chat_img"><a href="#"><FaComments/></a></span>
    </section>
    {/* <!-- //user info --> */}
    {/* <!-- user menu --> */}
    <section className="user_menu">
        <h2 className="blind">사용자 메뉴</h2>
        <ul>
            <li><a href="#"><FaSmile/>Emoticons</a></li>
            <li><a href="#"><FaPaintBrush/>Themes</a></li>
            <li><a href="#"><FaHandPeace/>Plus Friends</a></li>
            <li><a href="#"><FaUserCircle/>Account</a></li>
        </ul>
    </section>
    {/* <!-- //user menu --> */}
    {/* <!-- plus friends --> */}
    <section className="plus_friends">
        <header>
            <h2>Plus Friends</h2>
            <span><FaInfoCircle/>Learn more</span>
        </header>
        <ul className="plus_list">
            <li><a href="#"><FaUtensils/>Order</a></li>
            <li><a href="#"><FaHome/>Store</a></li>
            <li><a href="#"><FaTv/>TV Channel/Radio</a></li>
            <li><a href="#"><FaPencilAlt/>Creation</a></li>
            <li><a href="#"><FaGraduationCap/>Education</a></li>
            <li><a href="#"><FaUniversity/>Politics/Society</a></li>
            <li><a href="#"><FaWonSign/>Finence</a></li>
            <li><a href="#"><FaVideo/>Movies/Music</a></li>
        </ul>
    </section>
    {/* <!-- more app --> */}
    <section className="more_app">
        <h2 className="blind">앱 더보기</h2>
        <ul>
            <li><a href="#"><span className="app_icon"></span>Kakao Story</a></li>
            <li><a href="#"><span className="app_icon"></span>Path</a></li>
            <li><a href="#"><span className="app_icon"></span>Kakao friends</a></li>
        </ul>
    </section>
</main>
<Nav/>
    </>
  )
}
