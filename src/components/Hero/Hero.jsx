import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import useMousePosition from '../../hooks/useMousePosition';
import './Hero.css';

const Hero = () => {
  const { x, y } = useMousePosition();

  return (
    <section className="hero-section" id="home">
      <div className="hero-spotlight" style={{ '--x': `${x}px`, '--y': `${y}px` }}></div>
      <ThreeBackground />
      <div className="hero-content container">
        <motion.h1 
          className="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Website that hustles harder than you
        </motion.h1>
        <motion.p 
          className="hero-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Website so clean that your competitor will click
        </motion.p>
        <motion.a 
          href="#contact" 
          className="cta-button hero-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Book a 10 min call
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
