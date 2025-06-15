import React from "react";
import "./styles/skills.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" size={80} /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" size={80} /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" size={80} /> },
  { name: "React", icon: <FaReact color="#61dbfb" size={80} /> },
  { name: "Node.js", icon: <FaNodeJs color="#68a063" size={80} /> },
  { name: "GitHub", icon: <FaGithub color="#171515" size={80} /> },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
