import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

const navStyle = {
  maxWidth: '1240px',
  margin: '0 auto',
  paddingBlock: '0.8rem',
}

const navItemStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '30px',
  gap: '0.2rem',
}

const pageLinkStyle = {
  padding: '0.2rem 0.75rem',
  backgroundColor: '#F2F5F7',
  borderRadius: '0.3rem',
}

function LoginHeader() {
  return (
    <div>
      <header>
        <nav style={navStyle}>
          <div style={navItemStyle} className="nav-item">
            <div className='logo'>
              <img style={{transform: 'scale(0.8)'}} src={logo} alt="ICT logo" />
            </div>
            <div style={pageLinkStyle} className='page-link'>
              <p className='nav-link-text'>Sign In</p>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

function DashboardHeader() {
  return (
    <div>
    <header>
      <nav style={navStyle}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className="nav-item">
          <div className="nav-item-1" style={navItemStyle}>
            <div className='logo'>
              <img style={{transform: 'scale(0.8)'}} src={logo} alt="ICT logo" />
            </div>
            <Link to={'/dashboard'}>
              <div style={pageLinkStyle} className='page-link'>
                <p className='nav-link-text'>Dashbaord</p>
              </div>
            </Link>
          </div>
          <div className='nav-item-2'>
            <Link to={'/'}>
              <button className='btn btn-sign-out' data-icon='signout-icon'>Sign Out</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  </div>
  )
}


export {LoginHeader, DashboardHeader}