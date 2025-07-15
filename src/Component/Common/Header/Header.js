import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>ZJCS</h1>
          <p className='f1'>Zamfara Journal of Chemical Science </p>
        </div>
        <nav className="nav">
          <ul className={`nav-list ${mobileMenuOpen ? 'show' : ''}`}>
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/editoral">Editorial Board</Link></li>
            <li className="nav-item"><Link to="/submission">Submission</Link></li>
            <li className="nav-item"><Link to="/archives">Archives</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="mobile-menu" onClick={toggleMobileMenu}>
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;