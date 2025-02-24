import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/*<div className="footer-section sitemap">*/}
        {/*  <h4>Site Map</h4>*/}
        {/*  <ul className="horizontal-nav">*/}
        {/*    <li><Link to="/">Home</Link></li>*/}
        {/*    <li><Link to="/company">Company</Link></li>*/}
        {/*    <li><Link to="/team">Team</Link></li>*/}
        {/*    <li><Link to="/projects">Projects</Link></li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
        {/*<div className="footer-section nothing">*/}
        {/*</div>*/}
        <div className="footer-section company-info">
        <h4>Company Info</h4>
          <ul className="">
          <li>Theta AI</li>
          <li>Chalandri, Greece</li>
          <li>+30 2106893472</li>
          </ul>
          <div className="company-links">
            <a 
              href="https://www.linkedin.com/company/t" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.376 19h-2.624v-8h2.624v8zm-1.312-9.146c-.843 0-1.523-.682-1.523-1.523 0-.844.68-1.523 1.523-1.523.844 0 1.523.68 1.523 1.523 0 .841-.679 1.523-1.523 1.523zm12.688 9.146h-2.623v-4.292c0-1.022-.02-2.337-1.426-2.337-1.426 0-1.645 1.114-1.645 2.264v4.365h-2.624v-8h2.523v1.092h.036c.352-.667 1.213-1.367 2.496-1.367 2.67 0 3.163 1.757 3.163 4.041v4.234z" />
              </svg>
            </a>
            <a 
              href="mailto:contact@theta-ai.com" 
              className="email-link"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l-11.985-7.713v14h23.97v-14l-11.985 7.713zm12-9.713h-24l12 8 12-8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© {currentYear} Theta AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
