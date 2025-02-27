import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ darkMode, toggleMode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Mobile Logo Button */}
      <button className="mobile-logo-button" onClick={toggleModal}>
        <span className="theta-logo">&#x03D1;</span>
      </button>

      {/* Desktop Header */}
      <header className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="logo">
          {/* Use Unicode character U+03D1 (θ) */}
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
          <span className="theta-logo">
            &#x03D1; {/* Unicode for theta */}
          </span>
          </Link>
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Company
              </Link>
            </li>
            <li>
              <Link to="/team" className="nav-link">
                Team
              </Link>
            </li>
            <li>
              <Link to="/partners" className="nav-link">
                Partners
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        {/*<button onClick={toggleMode} className="mode-toggle">*/}
        <button className="mode-toggle">
        {darkMode ? '🌙' : '☀️'}
          </button>
      </header>

      {/* Mobile Navigation Modal */}
      <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={toggleModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <nav>
            <ul className="modal-nav-list">
              <li><Link to="/" onClick={toggleModal}>Company</Link></li>
              <li><Link to="/team" onClick={toggleModal}>Team</Link></li>
              <li><Link to="/partners" onClick={toggleModal}>Partners</Link></li>
              <li><Link to="/projects" onClick={toggleModal}>Projects</Link></li>
              <li>
                <button onClick={(e) => {
                  e.preventDefault();
                  toggleMode();
                  toggleModal();
                }}>
                  {darkMode ? '🌙' : '☀️'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;