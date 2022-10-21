import React from 'react'
import '../styles/Find.scss'
import { FaUser, FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull, FaCog, FaComment,FaSearch, FaEllipsisH, FaAddressBook, FaQrcode, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Header from '../component/Header';
import { Link } from 'react-router-dom';
import Nav from '../component/Nav';


export default function Find() {
  return (
    <div>
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
                <div className="left-item">Edit</div>
                <div className="right-item"></div>
            </div>
        </div>
        <main>
            <ul class="find_method">
                <li><Link to='/'><FaAddressBook/>Find</Link></li>
                <li><Link to='/'><FaQrcode/>QR Code</Link></li>
                <li><Link to='/'><FaMobileAlt/>Shake</Link></li>
                <li><Link to='/'><FaEnvelope/>Invite via SNS</Link></li>
            </ul>
            <section class="recommend_section">
                <header><h2>Recommended Friends</h2></header>
                <ul>
                    <li>You Have no recommended friends.</li>
                </ul>
            </section>
        </main>
        <Nav/>
    </div>
  )
}
