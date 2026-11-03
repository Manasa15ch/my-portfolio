import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCog,
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DAFB",
  },
  {
    name: "Java",
    icon: <FaJava />,
    color: "#F89820",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "#3776AB",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "#00758F",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
  },
  {
    name: "SQL",
    icon: <FaDatabase />,
    color: "#336791",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#ffffff",
  },
  {
    name: "ServiceNow",
    icon: <FaCog />,
    color: "#81B441",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <motion.div
        className="skills-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4>My Expertise</h4>
        <h2>Technical Skills</h2>
      </motion.div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -10,
            }}
            viewport={{ once: true }}
          >
            <div
              className="skill-icon"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Skills;