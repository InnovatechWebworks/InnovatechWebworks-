import React from 'react';
import { motion } from 'framer-motion';
import './MobileMenu.css';

const menuVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
};

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="mobile-menu-overlay"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuVariants}
    >
      <div className="mobile-menu-links">
        <a href="#work" className="mobile-menu-link" onClick={onClose}>Works</a>
        <a href="#services" className="mobile-menu-link" onClick={onClose}>Services</a>
        <a href="#contact" className="mobile-menu-link" onClick={onClose}>Contact</a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
