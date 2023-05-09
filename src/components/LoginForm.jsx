import axios from 'axios';
import logo from '../logo.svg';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import AlertTitle from '@mui/material/AlertTitle';

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
  const navigate = useNavigate()
  const serverApi = "http://localhost:8080/api/login"

// ----------- Failute Toast -------------
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  
  const { vertical, horizontal, open } = state;
  const handleClick = () => {
    setState({ ...state, open: true,});
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
// ----------- Failute Toast -------------

  const [input, setInput] = useState({})
  const changeData = (event) => {
    setInput({
        ...input, [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(serverApi, input)
    .then(response => {
        if(response.data.status === 'Authentication Successful') {
            const token = response.data.token
            const userId = response.data.userData.id
            const name = response.data.userData.name
            const role = response.data.userData.role

            sessionStorage.setItem("userToken", token)
            sessionStorage.setItem("userId", userId)
            sessionStorage.setItem("userName", name)
            sessionStorage.setItem("userRole", role)

            navigate('/dashboard')
        }else {
            handleClick()
        }
     }) 
  }

  return (
    <div style={{padding: '1rem'}}>
        <form onSubmit={handleSubmit} style={formStyle}>
            <div style={formHeaderStyle} className='form-header'>
                <div style={logoStyle} className='logo'>
                    <img src={logo} alt="ICT logo" />
                </div>
                <h1>Sign in to your account</h1>
                <p>Welcome back 👋! Please enter your details</p>
            </div>
            <div style={{display: 'grid'}} className='form-body'>
                <label style={labelStyle} htmlFor="email-input">Email</label>
                <input style={inputStyle} name='email' id='email-input' type="email" placeholder='johndoe@email.com' onChange={changeData} />
                <label style={labelStyle} htmlFor="password-input">Password</label>
                <input style={inputStyle} name='password' id='password-input' type="password" placeholder='Password' onChange={changeData} />
                <div style={{display: 'grid'}} className='form-action'>
                    <button type='submit' className='btn btn-sign-in'>Sign in</button>
                </div>
            </div>
        </form>
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            key={vertical + horizontal}
        >
            <Alert severity="error">
                <AlertTitle>Failed</AlertTitle>
                User name or password does not exist — <strong>Please contact the admin</strong>
            </Alert>
        </Snackbar>
    </div>
  )
}

export default LoginForm