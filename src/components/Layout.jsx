import React from 'react';
import './Portfolio.css';
// import profileImg from '../assets/images/profile.jpg'; // Optional: Local image

const PortfolioFront = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{ backgroundColor: 'black', color: 'white' }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-6 text-center text-md-start mb-5 mb-md-0">
            <h1 className="mb-3">
              Hey, I'm <span className="text-primary">Manjeet Kumar</span>
            </h1>
            <p className="mb-4">
              Hi! I'm a Full Stack Web Developer passionate about creating
              user-friendly and scalable web applications.
            </p>
            <div className="mb-4 d-flex justify-content-center justify-content-md-start flex-wrap gap-3">
              <a
                href="mailto:manjeetbajiya48@gmail.com"
                className="btn btn-primary"
              >
                Hire Me
              </a>
              <a
                href="/ManjeetKumarCv.pdf"
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://www.linkedin.com/in/manjeet-kumar-aa2637278"
                className="btn btn-outline-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/Manjeet617"
                className="btn btn-outline-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src="./profile.jpg"
              alt="Profile"
              className="rounded-circle shadow-lg"
              style={{ maxHeight: '400px', width: '100%', maxWidth: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFront;
