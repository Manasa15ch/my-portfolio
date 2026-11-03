import "./Navbar.css";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaDownload,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [active, setActive] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Toggle Theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-theme");
  };

  // Close Mobile Menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Active Link Highlight
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = document.querySelectorAll("section");

      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      if (current) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  // Scroll Progress
  useEffect(() => {
    const handleProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleProgress);

    return () => {
      window.removeEventListener("scroll", handleProgress);
    };
  }, []);

  // Close Menu on Desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">

      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Logo */}
      <div className="logo">
        <a href="#home">
          My Portfolio
        </a>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a
            href="#home"
            className={active === "home" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={active === "about" ? "active-link" : ""}
            onClick={closeMenu}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>



        <li>
          <a
            href="#certifications"
            className={active === "certifications" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Certifications
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active-link" : ""}
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Right Side */}
      <div className="nav-right">

        {/* Theme */}
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          <FaDownload />
          <span>Resume</span>
        </a>


        {/* Mobile Menu */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;