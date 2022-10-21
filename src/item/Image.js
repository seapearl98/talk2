import React from 'react'
import './Image.scss'

export default function Image({image}) {
  return (
    <span class="profile_img empty"><img src={image} alt={image} /></span>
  )
}
