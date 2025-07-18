import React from 'react';
import './Work.css';

const staticProjects = [
  {
    _id: '1',
    title: "Shopmenia",
    description: "A full stack e-commerce website with admin panel",
    projectUrl: "https://github.com/RAMANP-007/shopmenia",
    liveDemoUrl: "https://shopmenia.vercel.app/",
    imageUrl: "/images/Shopmenia.png",
  },
  {
    _id: '2',
    title: "Eve Cafe",
    description: "A basic website for a cafe with email messaging feature",
    projectUrl: "https://github.com/RAMANP-007/eve-cafe",
    liveDemoUrl: "https://eve-cafe.vercel.app/",
    imageUrl: "/images/eve-cafe.png",
  },
  {
    _id: '3',
    title: "Balrambati Homeohall",
    description: "A modern and responsive homeopathy clinic website",
    projectUrl: "https://github.com/RAMANP-007/balarambati-homeohall",
    liveDemoUrl: "https://balarambati-homeohall.vercel.app/",
    imageUrl: "/images/Balrambati.png",
  },
];

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
              <img
                src={project.imageUrl}
                alt={project.title}
                className="work-card-img"
              />
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
