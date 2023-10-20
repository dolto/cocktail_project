import React from "react";
import { Link } from "react-router-dom";
import FooterStyle from "../../styled/FooterStyle";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FooterStyle>
      <section className="footer-container">
        <section className="Info">
          <h1>Cocktail Sense</h1>
          <span>by 팀이름</span>
        </section>
        <section className="Header-nav">
          <nav>
            <h1>Pages</h1>
            <ul>
              <li>
                <Link to="/" className="link-style" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Recipe" className="link-style" onClick={scrollToTop}>
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/Store" className="link-style" onClick={scrollToTop}>
                  Cocktail Bar
                </Link>
              </li>
              <li>
                <Link to="/OneDayClass" className="link-style" onClick={scrollToTop}>
                  Class
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className="Personal-page">
          <nav>
            <h1>Team’s Pages</h1>
            <ul>
              <li>
                <a href="/" className="link-style" target="_blank" rel="noopener noreferrer">
                  홍도완
                </a>
              </li>
              <li>
                <a href="/" className="link-style" target="_blank" rel="noopener noreferrer">
                  임홍인
                </a>
              </li>
              <li>
                <a href="/" className="link-style" target="_blank" rel="noopener noreferrer">
                  이은비
                </a>
              </li>
              <li>
                <a href="/" className="link-style" target="_blank" rel="noopener noreferrer">
                  유세훈
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </FooterStyle>
  );
};

export default Footer;
