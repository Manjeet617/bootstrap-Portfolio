import React from "react";

function About() {
  return (
    <div className="container px-3" style={{ marginTop: "80px" }}>
      <div className="row">
        {/* Sidebar Navigation - Hidden on small screens */}
        <div className="col-md-4 d-none d-md-block mb-3">
          <div className="list-group">
            <a className="list-group-item list-group-item-action" href="#about-me">About Me</a>
            <a className="list-group-item list-group-item-action" href="#education">Education</a>
          </div>
        </div>

        {/* Full-width content on mobile */}
        <div className="col-12 col-md-8">
          <div className="bg-light p-4 rounded shadow-sm">
            <h4 id="about-me">About Me</h4>
            <p>
              I am a final year B.Tech Electrical Engineering student at Rajasthan Technical University, Kota, with a CGPA of 7.10. I also have technical skills in Python, Java, HTML, and CSS. I enjoy building web applications and learning new tools. I’m a fast learner, team-oriented, and keen to explore opportunities where I can apply my engineering and programming knowledge.
            </p>

            <h4 id="education">Education</h4>
            <p>
              <strong>Bachelor of Technology (B.Tech)</strong> in Electrical Engineering<br />
              Rajasthan Technical University, Kota<br />
              CGPA: 7.10<br />
              Expected Graduation: <strong>April 2026</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
