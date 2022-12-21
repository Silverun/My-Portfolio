import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* <h1 className="footer__title"></h1> */}
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/anton-konjushkevich-64703384/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="https://www.udemy.com/user/imonutiy/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-book-open"></i>
          </a>
          <a
            href="https://github.com/Silverun"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Silverun. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
