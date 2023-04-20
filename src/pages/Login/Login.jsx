import './Login.css';
import React from 'react';
import LoginForm from '../../components/LoginForm'
import {LoginHeader} from '../../components/Headers'

function Login() {
  return (
    <div className='login-page'>
      <div className='login-header'>
        <LoginHeader />
      </div>
      <div className="login-form">
          <LoginForm />
      </div>
    </div>
  )
}

export default Login