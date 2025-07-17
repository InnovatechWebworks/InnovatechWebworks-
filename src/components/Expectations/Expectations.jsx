import React from 'react';
import { motion } from 'framer-motion';
import './Expectations.css';

const expectationsData = [
  { title: 'Understand', text: 'We begin by deeply understanding your goals.' },
  { title: 'Align', text: 'We craft solutions that align with your vision.' },
  { title: 'Deliver', text: 'We don’t just meet expectations — we exceed with precision and passion.' },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  }
};

const Expectations = () => {
  return (
    <section className="expectations-section">
      <div className="container">
                        <motion.h2 
          className="section-heading" 
          data-scroll 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Matching Your Expectations
        </motion.h2>
                <motion.div 
          className="expectations-grid"
          initial="initial"
          whileInView="inView"
          variants={cardVariants}
          viewport={{ once: true, amount: 0.3 }}
          data-scroll
        >
          {expectationsData.map((item, index) => (
            <motion.div
              key={index}
              className="expectation-card-wrapper"
              variants={cardVariants}
            >
              <motion.div 
                className="expectation-card"
                                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <div className="card-face card-front">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                                <div className="card-face card-back"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expectations;
