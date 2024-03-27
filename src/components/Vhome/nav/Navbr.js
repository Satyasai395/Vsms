import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbr.css";
import Logo from "../../Asserts/logo.png";
//import Login from "../Login/Login";

import LoginPage from '../../LoginPage/LoginPage'

function Navbr() {
  
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };
  return (
    <div className={`wrapper `}> {/* ${loginbox ? "blurred" : ""} */}
      <nav className="nav">
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                to="Home"
                className="link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                to="About"
                className="link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                to="contactPage"
                className="link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <button
            onClick={handleLoginClick}
            className="btn white-btn"
            id="loginBtn"
          >
            Login in
          </button>
          {showLogin && <LoginPage onClose={handleCloseLogin} />}
        </div>
      </nav>
      
    </div>
  );
}

export default Navbr;
/* {loginbox && (
  <div className="overlay">
    <Login onClose={handleCloseClick} />
  </div>
)} */