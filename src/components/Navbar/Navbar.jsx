import React, { useState, useContext } from 'react';
import LocomotiveScrollContext from '../../context/LocomotiveScrollContext.jsx';
import { AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scroll } = useContext(LocomotiveScrollContext);

  const handleScroll = (target) => {
    if (scroll) {
      scroll.scrollTo(target, { duration: 1200, easing: [0.8, 0, 0.2, 1] });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
                    <a onClick={() => handleScroll('#home')} className="navbar-logo" style={{ cursor: 'pointer' }}>Innovatech WebWorks</a>
          <div className="navbar-menu">
                        <a onClick={() => handleScroll('#work')} className="navbar-link" style={{ cursor: 'pointer' }}>Works</a>
                        <a onClick={() => handleScroll('#services')} className="navbar-link" style={{ cursor: 'pointer' }}>Services</a>
          </div>
                    <a href="https://wa.me/916289523449" target="_blank" rel="noopener noreferrer" className="navbar-cta cta-button">Chat Now</a>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
