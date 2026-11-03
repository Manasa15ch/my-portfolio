import "./About.css";
import profile from "../../assets/images/pass.jpg";
import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={profile} alt="Manasa" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <h4>Get To Know</h4>

        <h2>About Me</h2>

        <p>
          I'm <strong>Chimirthi Manasa</strong>, a passionate Computer Science
          graduate who enjoys building responsive web applications using
          <strong> React, Java, JavaScript, HTML, CSS, SQL</strong> and modern
          web technologies.
        </p>

        <p>
          I enjoy learning new technologies, solving programming problems,
          and creating user-friendly websites. My goal is to become a
          Full Stack Developer and contribute to innovative software
          solutions.
        </p>

        <div className="about-info">

          <div className="info-box">
            <FaUserGraduate />
            <div>
              <h3>Education</h3>
              <span>B.Tech (CSE)</span>
            </div>
          </div>

          <div className="info-box">
            <FaLaptopCode />
            <div>
              <h3>Experience</h3>
              <span>Fresher</span>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h3>Location</h3>
              <span>Nellore, Andhra Pradesh</span>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <span>chimirthimanasa@gmail.com</span>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <span>Available on Request</span>
            </div>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;