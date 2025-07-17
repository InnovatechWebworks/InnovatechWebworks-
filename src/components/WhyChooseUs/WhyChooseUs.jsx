import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const whyChooseUsData = [
  { icon: '🔧', text: "Not just another agency – we're your digital-native build crew" },
  { icon: '💰', text: 'Startup-friendly pricing' },
  { icon: '⚡', text: 'Fast delivery' },
  { icon: '📢', text: 'Transparent communication' },
  { icon: '🎨', text: 'Aesthetic-first approach' },
  { icon: '👨‍💻', text: 'Built by young pros for modern brands' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2 className="section-heading" data-aos="fade-up">Why Choose Innovatech WebWorks?</h2>
        <motion.div 
          className="why-choose-us-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {whyChooseUsData.map((item, index) => (
            <motion.div 
              key={index} 
              className="why-choose-us-item"
              custom={index}
              variants={itemVariants}
            >
              <span className="why-choose-us-icon">{item.icon}</span>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
