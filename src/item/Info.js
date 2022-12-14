import React from 'react'
import PropTypes from 'prop-types';
import './Info.scss';
import { Link } from 'react-router-dom';
import './figureimg.json'
import Image from './Image';
import Name from './Name';
import Text from './Text';

function Info ({images,name,texts,bgImg}){
  return (
        <li>
          <Link to={'/Profile'} state={{images,name,texts,bgImg}}>
            <span class="profile_img empty"><img src={images} alt={images}/></span>
            <span class="profile_name">{name}</span>
            <span class="profile_messages">{texts}</span>
          </Link>
        </li>
  )
}

export default Info;