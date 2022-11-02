import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginForm from './LoginForm';
import { authService } from './fbase';
import { GoogleAuthProvider,GithubAuthProvider,signInWithPopup } from "firebase/auth";
import { FaComment } from 'react-icons/fa';
import { IconName, RiKakaoTalkFill } from "react-icons/ri";
import './styles/Login.scss'

export default function Login() {

    const onSocialClick = (e) => {
        // console.log(e.target.name)
        const {target: {name}} = e;
        let provider
        if(name === "google"){
          provider = new GoogleAuthProvider();
        }else if(name === "github"){
          provider = new GithubAuthProvider();
        }
        const data = signInWithPopup(authService, provider)
        console.log(data);
      }

  return (
    <div className='Login'>
        <div className='authContainer'>
            <span className='logo'><RiKakaoTalkFill/></span>
            <LoginForm/>
            <div className='authBtns'>
                <button onClick={onSocialClick} name="google">
                Continue with Google <FontAwesomeIcon icon="fa-brands fa-google" /></button>
                <button onClick={onSocialClick} name="github">
                Continue with Github <FontAwesomeIcon icon="fa-brands fa-github" /></button>
            </div>
        </div>
    </div>
  )
}
