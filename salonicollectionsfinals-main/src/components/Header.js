import React, { useState } from 'react';
import logo from '../images/logo.png';
import { FaShoppingCart, FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Saloni Collections" className="logo" />
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <FaSearch className="search-icon" />
        </div>
        <div className="header-icons">
          {auth ? (
            <div className="profile-container">
              <FaUserCircle className="profile-icon" onClick={toggleMenu} />
              {menuOpen && (
                <div className="profile-menu">
                  <button className="menu-item">Edit Profile</button>
                  <button className="menu-item" onClick={handleLogout}>Logout</button>
                  {/* Add other required buttons here */}
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="auth-button" onClick={() => navigate('/signup')}>Signup</button>
              <button className="auth-button" onClick={() => navigate('/login')}>Login</button>
            </>
          )}
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
