import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { IoCloseCircle } from "react-icons/io5";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { GiHamburgerMenu } from "react-icons/gi";
import './index.css'
import { LogoutButton } from './styles'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(null)

  const navigate = useNavigate()

  const onLogout = () => {
    Cookies.remove("jwt_token")
    navigate("/login")
  }

  return (
    <Popup trigger={
      <div className='hamburger-menu-container'>
        <GiHamburgerMenu className='hamburger-menu' />
      </div>
    } position="bottom right" open={isOpen} modal={true} className="my-popup">
      <div className='mobile-menu' >
        <Link to="/" className='link'>Home</Link>
        <Link to="/" className='link'>Search</Link>
        <Link to="/my-profile" className='link'>Profile</Link>
        <LogoutButton type="button" onClick={onLogout}>Logout</LogoutButton>
        <IoCloseCircle onClick={() => setIsOpen(false)} />
      </div>
    </Popup>
  )
}

export default HamburgerMenu
