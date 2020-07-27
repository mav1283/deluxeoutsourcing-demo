import React from "react";
import ReactDOM from "react-dom";

const navmenuPortal = document.getElementById("navmenuportal");

function MobileMenuModal({ children, exitHandler }) {
  return ReactDOM.createPortal(
    <div className="mobile-menu-modal" onClick={exitHandler}>
      {children}
    </div>,
    navmenuPortal
  );
}

export default MobileMenuModal;
