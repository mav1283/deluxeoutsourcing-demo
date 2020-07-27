import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

function NavmenuMobile({ exitHandler, mobileNav }) {
  const [initPos, setInitPos] = useState(
    `-${document.getElementById("app-nav-mobile")}px`
  );

  useEffect(() => {
    mobileNav && setInitPos(0);
  }, [mobileNav]);
  return (
    <nav
      id="app-nav-mobile"
      className="app-nav-mobile"
      style={{ transform: `translateX(${initPos})` }}
    >
      <div className="nav-header">
        <h3>Menu</h3>
        <button onClick={exitHandler} className="modal-close">
          &#10006;
        </button>
      </div>
      <div className="nav-links">
        <NavLink to="/why-deluxe" onClick={exitHandler}>
          Why deluxe<span className="nav-icon">&#10095;</span>
        </NavLink>
        <NavLink to="/how-it-works" onClick={exitHandler}>
          How it works<span className="nav-icon">&#10095;</span>
        </NavLink>
        <NavLink to="/build-your-team" onClick={exitHandler}>
          Build your team<span className="nav-icon">&#10095;</span>
        </NavLink>
        <NavLink to="/learn" onClick={exitHandler}>
          Learn<span className="nav-icon">&#10095;</span>
        </NavLink>
        <NavLink to="/careers" onClick={exitHandler}>
          Career<span className="nav-icon">&#10095;</span>
        </NavLink>
        <NavLink to="/about-us" onClick={exitHandler}>
          About us<span className="nav-icon">&#10095;</span>
        </NavLink>
        <NavLink to="contact-us" onClick={exitHandler}>
          <span className="nav-icon-front">
            <FaPhone />
          </span>
          Contact us
        </NavLink>
      </div>
    </nav>
  );
}

export default NavmenuMobile;
