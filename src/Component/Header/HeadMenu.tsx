import React from "react";
import { Link } from "react-router-dom";
import "../Css/HeadMenu.css";
import logoimg from "../res/img/ic_cocktail.png"

const HeadMenu: React.FC = () => {
  return (
    <header className="header">
      <h1 className="container">
        <Link to="/" className="link-style">
          <div className="content">
            <img src={logoimg} />
            <div className="logo">Cocktail Sense</div>
          </div>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about" className="link-style">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="link-style">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/cocktail-bar" className="link-style">
              Cocktail Bar
            </Link>
          </li>
          <li>
            <Link to="/class" className="link-style">
              Class
            </Link>
          </li>
        </ul>
      </nav>
      <div className="login-button">
        <Link to="/login" className="link-style">
          Login
        </Link>
        <Link to="/signup" className="link-style">
          <button>Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default HeadMenu;