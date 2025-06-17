import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-md-4">
          <div id="list-example" className="list-group">
            <a className="list-group-item list-group-item-action" href="#about-me">About Me</a>
            <a className="list-group-item list-group-item-action" href="#education">Education</a>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="col-md-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example p-3 border rounded bg-light"
            tabIndex="0"
            style={{ height: "400px", overflowY: "scroll" }}
          >
            <h4 id="about-me">About Me</h4>
            <p>
              I am a final year B.Tech Electrical Engineering student at Rajasthan Technical University, Kota, with a CGPA of 7.10. Alongside my core engineering studies, I have developed strong technical skills in Python, Java, HTML, and CSS. I'm passionate about technology and software development, and I enjoy building web applications and learning new tools. I am a fast learner, team-oriented, and always eager to explore challenging opportunities where I can apply both my engineering background and programming knowledge to solve real-world problems.
            </p>

            <h4 id="education">Education</h4>
            <p>
              <strong>Bachelor of Technology (B.Tech)</strong> in Electrical Engineering<br />
              Rajasthan Technical University, Kota, Rajasthan<br />
              Final Year (CGPA: 7.10)<br />
              Expected Graduation: <strong>April, 2026</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
