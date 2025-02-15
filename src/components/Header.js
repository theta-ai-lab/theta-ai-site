import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ darkMode, toggleMode }) {
  return (
    <header className="navbar">
      <div className="logo">
        {/* Use Unicode character U+03D1 (θ) */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className={`theta-logo ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            &#x03D1; {/* Unicode for theta */}
          </span>
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Company
            </Link>
          </li>
          <li>
            <Link to="/team" style={{ textDecoration: 'none', color: 'inherit' }}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleMode} className="mode-toggle">
        {darkMode ? '🌙' : '☀️'}
      </button>
    </header>
  );
}

export default Header;
