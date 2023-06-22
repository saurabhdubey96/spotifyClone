import React from 'react'
import {loginEndPoint} from '../../spotify'
import './login.css'

export default function Login() {
  return (
    <div className='login-page'>
     <img
     src=''
     alt=''
     className='logo'/>
     <a href={loginEndPoint}>
        <div className='login-btn'>Login  </div>

     </a>
    </div>
  )
}
