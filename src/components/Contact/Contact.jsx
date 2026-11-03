import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zm1vgds",
        "template_1mic41i",
        form.current,
        "yfP_aqENXYsZ86AaD"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
  console.log("EmailJS Error:");
  console.log("Status:", error.status);
  console.log("Text:", error.text);
  console.log(error);
  alert(error.text || error.message || "Failed to send message");
});
  };

  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4>Get In Touch</h4>
        <h2>Contact Me</h2>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Let's Work Together 🚀</h3>

          <p>
            I'm a Java Full Stack Developer passionate about building modern web
            applications. Feel free to contact me for internships, full-time
            opportunities, or collaborations.
          </p>

          <div className="info-box">
            <FaEnvelope />
            <span>chimirthimanasa@gmail.com</span>
          </div>

          <div className="info-box">
            <FaPhone />
            <span>+91 7032783641</span>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <span>Nellore, Andhra Pradesh</span>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/chimirthi-manasa-59470b267/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Manasa15ch"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <input
  type="text"
  name="user_name"
  placeholder="Your Name"
  required
/>

<input
  type="email"
  name="user_email"
  placeholder="Your Email"
  required
/>

<textarea
  name="message"
  placeholder="Your Message"
  required
></textarea>

          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;