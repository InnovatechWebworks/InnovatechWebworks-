import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    // Prevent duplicate script injections
    if (!document.querySelector('script[src="https://embed.cal.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://embed.cal.com/embed.js';
      script.async = true;
      script.setAttribute('data-auto-load', 'false');
      script.onload = () => console.log('Cal.com embed script loaded.');
      document.body.appendChild(script);
    }
  }, []);

  const handleOpenCal = (e) => {
    e.preventDefault();
    if (window.Cal) {
      window.Cal.openPopupWidget({
        url: 'https://cal.com/innovatech-webworks/chat-now'
      });
    } else {
      // fallback in case script hasn't loaded yet
      window.location.href = 'https://cal.com/innovatech-webworks/chat-now';
    }
  };

  return (
    <footer className="footer-section" id="contact" role="contentinfo">
      <div className="container footer-container">
        <motion.h2
          className="footer-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Let’s build your dream web presence.
        </motion.h2>

        <motion.button
          onClick={handleOpenCal}
          className="cta-button footer-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          aria-label="Schedule your free consultation on Cal.com"
        >
          Schedule Your Free Consultation
        </motion.button>
      </div>

      <div className="footer-bottom">
        <p style={{color:"whitesmoke"}}>© 2025 Innovatech WebWorks. All rights reserved.</p>
        {/* Optional links for legal pages */}
        {/* <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms</a> */}
      </div>
    </footer>
  );
};

export default Footer;
