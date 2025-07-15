import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h4>About IJSGS</h4>
          <p>The International Journal of Science for Global Sustainability is a peer-reviewed, open-access journal dedicated to publishing high-quality research that addresses global sustainability challenges.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/editorial">Editorial Board</Link></li>
            <li><Link to="/submission">Submission Guidelines</Link></li>
            <li><Link to="/archives">Archives</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: editor@ijsgs.org</p>
          <p>Phone: +1 (123) 456-7890</p>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 International Journal of Science for Global Sustainability. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;