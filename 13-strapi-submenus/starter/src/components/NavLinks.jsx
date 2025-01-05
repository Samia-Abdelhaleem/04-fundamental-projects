import React from "react";
import sublinks from "../data";
import Submenu from "./Submenu";
import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";
const NavLinks = () => {
  const { selectedPageId, setSelectedPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map(({ pageId, page, links }) => (
        <button
          className="nav-link"
          key={pageId}
          onMouseEnter={() => setSelectedPageId(pageId)}
        >
          {page}
        </button>
      ))}
      <Submenu />
    </div>
  );
};

export default NavLinks;
