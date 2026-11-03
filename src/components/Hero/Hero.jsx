import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import profile from "../../assets/images/pass.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Left Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="hello">
          <span className="wave">👋</span> Hello, I'm
        </p>

        <h1>
          Chimirthi <span>Manasa</span>
        </h1>
<h2 className="typing">
  React Developer | Java Developer | Full Stack Developer
</h2>

        <p className="description">
          Passionate Computer Science graduate with strong
          skills in React, Java, JavaScript, HTML, CSS and SQL.
          I enjoy building responsive web applications and
          continuously learning new technologies.
        </p>

        <div className="hero-buttons">

          <a
            href="/Chimirthi_Manasa_Resume.pdf"
            download
            className="btn primary"
          >
            <FaDownload />
            Resume
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/Manasa15ch"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/chimirthi-manasa-59470b267/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:chimirthimanasa@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </motion.div>

      {/* Right Image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <img src={profile} alt="Manasa" />

      </motion.div>

      
      {/* Scroll Indicator */}
      <a href="#about" className="scroll-down">
        ↓
      </a>

    </section>
  );
}

export default Hero;