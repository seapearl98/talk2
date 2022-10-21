import React from 'react'
import { Link } from 'react-router-dom'
import './ChattingList.scss'

export default function ChattingList({name,images,texts}) {
  return (
    <li>
    <Link to={'/chatting'} state={{name,images,texts}}>
        <span className="chats_img empty"><img src={images} alt={images}/></span>
        <span className="chats_cont">
            <span className="chats_name">{name}</span>
            <span className="chats_latest">This is test message.</span>
        </span>
        <span className="chats_time">
            <span>15</span>:<span>33</span>
        </span>
    </Link>
</li>
  )
}
