import React from "react";
import { useGlobalContext } from "../context/globalContext";
import { FaBars } from "react-icons/fa";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar, setSelectedPageId } =
    useGlobalContext();
  const handleShowSubmenu = (e) => {
    console.log(e.target);
    if (!e.target.classList.contains("nav-link")) {
      setSelectedPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleShowSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
