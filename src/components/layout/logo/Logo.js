import React from "react";
import { Link } from "react-router-dom";
import NavmenuButton from "../header/NavmenuButton";

function Logo() {
  return (
    <div className="app-logo">
      <Link to="/">
        <span className="primary-highlight">delux</span>
        <span className="warning-highlight">outsourcing</span>
      </Link>
      <NavmenuButton />
    </div>
  );
}

export default Logo;
