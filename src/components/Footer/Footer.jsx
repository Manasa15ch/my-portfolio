import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Manasa. All Rights Reserved.</p>

      <button className="top-btn" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;