import React from "react";
import "./CSS/footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <a>MERN App © {year}</a>
          <a
            href="https://instagram.com/its_shah_9?utm_medium=copy_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            itz_shah_9
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
