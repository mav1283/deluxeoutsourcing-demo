import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const navmenuPortal = document.getElementById("navmenuportal");

function MobileMenuModal({ children, exitHandler, mobileNav }) {
  const [transitionStyle, setTransitionStyle] = useState({
    transform: "translateX(100%)",
  });

  useEffect(() => {
    setTransitionStyle({
      transform: "translateX(0)",
    });
  }, []);

  useEffect(() => {
    if (mobileNav === false)
      setTransitionStyle({
        transform: "translateX(100%)",
      });
  }, [mobileNav]);

  return ReactDOM.createPortal(
    <div className="modal" onClick={exitHandler}>
      <div className="modal-content" style={transitionStyle}>
        {children}
      </div>
    </div>,
    navmenuPortal
  );
}

export default MobileMenuModal;
