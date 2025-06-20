import React from "react";
import './Projects.css';

// Import project images
import project1Img from "../assets/images/project1.png"; // Replace with actual path
import project2Img from "../assets/images/project2.png"; // Replace with actual path

const projects = [
  {
    title: "Bajiya Medical Website",
    description:
      "A responsive medical store website with medicine listings, cart system, login/signup, and user testimonials.",
    techStack: ["React.js", "Tailwind CSS", "React Router"],
    liveLink: "https://bajiyamedicalwebsite-xhc7.vercel.app/",
    githubLink: "",
    image: project1Img,
  },
  {
    title: "PhoneMaina Website",
    description:
      "Landing page for mobile accessories using HTML and Bootstrap, fully responsive across devices.",
    techStack: ["HTML", "TailwindCss"],
    liveLink: "https://tailwindcss-self-tau.vercel.app/index.html",
    githubLink: "",
    image: project2Img,
  },
];

function Projects() {
  return (
    <div className="container py-5" style={{ marginTop: "60px" }}>
      <h2 className="text-center mb-5">Projects</h2>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-sm-12 col-md-6 col-lg-5 mb-4" key={index}>
            <div
              className="card h-100 shadow-sm border-0 rounded-4 project-card animate__animated animate__fadeInUp"
              style={{ overflow: "hidden" }}
            >
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title text-primary fw-bold">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>
                <p className="mt-auto">
                  <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                </p>
                <div className="mt-3">
                  <a
                    href={project.liveLink}
                    className="btn btn-outline-primary btn-sm me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="btn btn-outline-dark btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
