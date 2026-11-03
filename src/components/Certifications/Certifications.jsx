import "./Certifications.css";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

import csa from "../../assets/certificates/csa.png";
import corejava from "../../assets/certificates/corejava.png";
import uiux from "../../assets/certificates/uiux.png";
import freecodecamp from "../../assets/certificates/freecodecamp.png";
import infosys from "../../assets/certificates/infosys.png";

const certifications = [
  {
    image: csa,
    title: "Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    year: "2025",
  },
  {
    image: corejava,
    title: "Full Stack Foundation - Core Java",
    issuer: "L&T EduTech",
    year: "2025",
  },
  {
    image: uiux,
    title: "UI & UX Developer",
    issuer: "L&T EduTech",
    year: "2025",
  },
  {
    image: freecodecamp,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2025",
  },
  {
    image: infosys,
    title: "Young Python Professional",
    issuer: "Infosys Springboard",
    year: "2025",
  },
];

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certifications" className="certifications">

      <motion.div
        className="cert-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h4>Achievements</h4>
        <h2>Certifications</h2>
      </motion.div>

      <div className="cert-container">
        {certifications.map((cert, index) => (
          <motion.div
            className="cert-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
          >
            <div
              className="cert-image-container"
              onClick={() => setSelectedImage(cert.image)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-image"
              />

              <div className="cert-overlay">
                <FaExternalLinkAlt />
                <span>View Certificate</span>
              </div>
            </div>

            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span>{cert.year}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <span
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </span>

          <img
            src={selectedImage}
            alt="Certificate"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Certifications;