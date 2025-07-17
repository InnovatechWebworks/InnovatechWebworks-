import React from 'react';
import './Work.css';

const staticProjects = [
  {
    _id: '1',
    title: "shopmenia",
    description: "A full stack e-commerce website with admin panel",
    projectUrl: "https://github.com/RAMANP-007/shopmenia",
    liveDemoUrl: "https://shopmenia.vercel.app/",
    imageUrl: "/images/Screenshot%202025-07-16%20171845.png", // path from public folder
  },
  {
    _id: '2',
    title: "eve-cafe",
    description: "A basic website for a cafe with email messaging feature",
    projectUrl: "https://github.com/RAMANP-007/eve-cafe",
    liveDemoUrl: "https://eve-cafe.vercel.app/",
    imageUrl: "/images/eve-cafe.png", // path from public folder
  }
];

// Duplicate data for seamless carousel
const duplicatedWorkData = [...staticProjects, ...staticProjects];

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="container">
        <h2 className="section-heading" data-aos="fade-up">Our Work</h2>
      </div>
      <div className="work-carousel-wrapper">
        <div className="work-carousel">
          {duplicatedWorkData.map((project, index) => (
            <div className="work-card" key={`${project._id}-${index}`}>
              <img src={project.imageUrl} alt={project.title} className="work-card-img" />
              <div className="work-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <a
                href={project.liveDemoUrl}
                className="live-demo-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
