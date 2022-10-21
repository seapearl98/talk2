import React from 'react'
import { FaPlane, FaWifi,FaMoon, FaBluetoothB, FaBatteryFull, FaCog } from "react-icons/fa";
import '../styles/Header.scss'

export default function Header() {

  return (
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
            <h1>Friends<span>1</span></h1>
            <div className="left-item">Manage</div>
            <div className="right-item"><FaCog/></div>
        </div>
    </div>
  )
}
