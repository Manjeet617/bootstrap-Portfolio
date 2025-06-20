import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import skill logos
import htmlLogo from "../assets/icons/html.png";
import cssLogo from "../assets/icons/css.png";
import jsLogo from "../assets/icons/javascript.png";
import reactLogo from "../assets/icons/react.png";
import bootstrapLogo from "../assets/icons/bootstrap.png";
import javaLogo from "../assets/icons/java.png";
import pythonLogo from "../assets/icons/python.png";

function Skills() {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React.js", logo: reactLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
    { name: "Java", logo: javaLogo },
    { name: "Python", logo: pythonLogo },
  ];

  return (
    <div className="container px-3" style={{ marginTop: "80px" }}>
      <h2 className="text-center mb-4">My Skills</h2>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div className="col-6 col-md-3 text-center mb-4" key={index}>
            <img
              src={skill.logo}
              alt={skill.name}
              className="img-fluid mb-2"
              style={{ height: "80px", width: "80px", objectFit: "contain" }}
            />
            <h6>{skill.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
