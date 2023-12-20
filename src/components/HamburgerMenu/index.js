import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { IoCloseCircle } from 'react-icons/io5';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import './index.css';
import { LogoutButton } from './styles';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const onLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/login');
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger-menu-container">
      <GiHamburgerMenu className="hamburger-menu" onClick={() => setIsOpen(true)} />
      <Popup
        open={isOpen}
        onClose={closeMenu}
        contentStyle={{ padding: '10px', borderRadius: '8px', width: "89%" }}
      >
        <div className="mobile-menu">
          <Link to="/" className="link">
            <span style={{ color: '#000' }}>Home</span>
          </Link>
          <Link to="/" className="link">
            <span style={{ color: '#000' }}>Search</span>
          </Link>
          <Link to="/my-profile" className="link">
            <span style={{ color: '#000' }}>Profile</span>
          </Link>
          <LogoutButton type="button" onClick={onLogout}>
            Logout
          </LogoutButton>
          <IoCloseCircle
            style={{ cursor: 'pointer' }}
            onClick={closeMenu}
          />
        </div>
      </Popup>
    </div>
  );
};

export default HamburgerMenu;
