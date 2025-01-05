import React from "react";
import { useGlobalContext } from "../context/globalContext";
import sublinks from "../data";
import { useRef } from "react";

const Submenu = () => {
  const { selectedPageId, setSelectedPageId } = useGlobalContext();
  const currentPage = sublinks.find((link) => link.pageId === selectedPageId);
  const submenuRef = useRef(null);
  const handleShowSubmenu = (e) => {
    setSelectedPageId(null);
  };
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleShowSubmenu}
      ref={submenuRef}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length >= 3 ? "repeat(3,1fr)" : "1fr",
        }}
      >
        {currentPage?.links?.map(({ id, label, icon, url }) => (
          <a href={url} key={id}>
            {icon} {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
