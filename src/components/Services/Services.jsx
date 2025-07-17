import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const servicesList1 = [
  'End-to-End Website Service',
  'Landing Pages',
  'E-commerce Websites',
];

const servicesList2 = [
  'AI Automation',
  'Social Media Handling',
  'Custom Websites',
];

const duplicatedServices1 = [...servicesList1, ...servicesList1];
const duplicatedServices2 = [...servicesList2, ...servicesList2];

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-split-layout">
        <div className="services-left-pane">
          <div className="services-marquee-wrapper">
            <div className="services-marquee-column-1">
              {duplicatedServices1.map((service, index) => (
                <div className="service-card" key={index}>
                  <h3>{service}</h3>
                </div>
              ))}
            </div>
            <div className="services-marquee-column-2">
              {duplicatedServices2.map((service, index) => (
                <div className="service-card" key={index}>
                  <h3>{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          className="services-right-pane"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h2
            className="services-title"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            {'Website Needs, Handled.'.split(' ').map((word, index) => (
              <motion.span key={index} variants={wordVariant}>
                {word}{' '}
              </motion.span>
            ))}
          </motion.h2>
          <p className="services-subtitle">
            We've got everything covered, expertly and efficiently.
          </p>
          <div className="services-image-wrapper">
            <img src="/images/services.png" alt="Our Services" className="services-image" />
            <div className="services-image-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
