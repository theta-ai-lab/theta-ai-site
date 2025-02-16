import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section sitemap">
          <h4>Site Map</h4>
          <ul className="horizontal-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
        <div className="footer-section nothing">
        </div>
        <div className="footer-section company-info">
          <h4>Company Info</h4>
          <p>
            Theta AI
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>© {currentYear} Theta AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
