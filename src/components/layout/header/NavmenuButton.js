import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileMenuModal from "../../modals/MobileMenuModal";
import NavMenuMobile from "../navmenu/NavmenuMobile";

function NavmenuButton() {
  const [mobileNav, setMobileNav] = useState(false);

  const openMenu = () => {
    setMobileNav(true);
  };

  const closeMenu = () => {
    setMobileNav(false);
  };

  return (
    <>
      <button
        onClick={openMenu}
        aria-label="Modal Button"
        className="navmenu-burger"
      >
        <FaBars />
      </button>
      {mobileNav ? (
        <MobileMenuModal exitHandler={closeMenu} mobileNav={mobileNav}>
          <NavMenuMobile exitHandler={closeMenu} />
        </MobileMenuModal>
      ) : null}
    </>
  );
}

export default NavmenuButton;
