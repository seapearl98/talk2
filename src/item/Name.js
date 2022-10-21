import React, { useEffect, useState } from 'react'
import './Name.scss'
import axios from 'axios';

 function Name({name}) {

  

  return (
        <span className="profile_name">{name}</span>
  )
}
export default Name;