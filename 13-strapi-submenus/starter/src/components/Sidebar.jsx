import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useGlobalContext } from "../context/globalContext";
const Sidebar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ pageId, page, links }) => (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map(({ id, label, icon, url }) => (
                  <a href={url} key={id}>
                    {icon} {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;