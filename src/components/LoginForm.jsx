import React from 'react'
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

const formStyle = {
    display: 'grid',
    gap: '2rem',
    width: '400px',
    minWidth: '342px'
}

const formHeaderStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const logoStyle = {
    marginBottom: '1.5rem'
}

const inputStyle = {
    padding: '0.5rem 0.875rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--clr-border)',
    marginBottom: '20px',
    minWidth: '342px'
}

const labelStyle = {
    fontSize: '1rem',
    marginBottom: '6px'
}

function LoginForm() {
  return (
    <div style={{padding: '1rem'}}>
        <form style={formStyle} action method>
            <div style={formHeaderStyle} className='form-header'>
                <div style={logoStyle} className='logo'>
                    <img src={logo} alt="ICT logo" />
                </div>
                <h1>Sign in to your account</h1>
                <p>Welcome back 👋! Please enter your details</p>
            </div>
            <div style={{display: 'grid'}} className='form-body'>
                <label style={labelStyle} htmlFor="email-input">Email</label>
                <input style={inputStyle} id='email-input' type="email" placeholder='johndoe@email.com' />
                <label style={labelStyle} htmlFor="password-input">Password</label>
                <input style={inputStyle} id='password-input' type="password" placeholder='Password' />
                <Link to={'/admindashboard'}>
                    <div style={{display: 'grid'}} className='form-action'>
                        <button className='btn btn-sign-in'>Sign in</button>
                    </div>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default LoginForm