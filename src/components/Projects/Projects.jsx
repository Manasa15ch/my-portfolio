import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Bank Management System",
    description:
      "Developed a secure banking application to manage customer accounts, deposits, withdrawals, fund transfers, and transaction history. Implemented object-oriented design principles and file handling to ensure efficient data management.",
    tech: "Java • OOP • File Handling",
    github: "https://github.com/Manasa15ch",
    demo: "#",
  },

  {
    title: "Employee Management System",
    description:
      "Designed and developed a database-driven employee management application with CRUD operations, enabling efficient management of employee records through JDBC connectivity and MySQL integration.",
    tech: "Java • JDBC • MySQL",
    github: "https://github.com/Manasa15ch",
    demo: "#",
  },

  {
  title: "Distributed System Using Spring Boot Microservices",
  description:
"Developed a distributed enterprise application using Spring Boot Microservices. Implemented Eureka Server for service discovery, Config Server for centralized configuration, API Gateway for request routing, and REST APIs for secure inter-service communication, improving scalability and maintainability.",
  tech: "Java • Spring Boot • Spring Cloud • Microservices • Eureka Server • Config Server • API Gateway • REST APIs • Maven • Git",
  github: "https://github.com/Manasa15ch",
  demo: "#",
},

  {
    title: "Personal Portfolio Website",
    description:
      "Developed a responsive portfolio website showcasing projects, technical skills, certifications, and contact information. Integrated smooth animations, dark/light theme support, and a modern user interface using React.",
    tech: "React • CSS • Framer Motion • Responsive Design",
    github: "https://github.com/Manasa15ch",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      <motion.div
        className="projects-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4>My Work</h4>
        <h2>Projects</h2>
      </motion.div>

      <div className="projects-container">

        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt /> Demo
              </a>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Projects;