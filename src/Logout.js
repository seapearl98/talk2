import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { authService } from './fbase';

export default function Logout() {

    const navigate = useNavigate();

    const onLogOutClick = () => {
        authService.signOut();
        navigate("/"); // 홈으로 이동
      }

  return (
    <span onClick={onLogOutClick}>Log Out</span>
  )
}
