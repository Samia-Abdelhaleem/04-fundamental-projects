import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../logo.svg";
import { links, social } from "../data";
import { useState } from "react";
import { useRef } from "react";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks((show) => !show);
  };

  const linksStyles = {
    height: showLinks
      ? `${linksRef?.current?.getBoundingClientRect()?.height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* <ul className="links" ref={linksRef} style={linksStyles}>
          {links.map(({ id, url, text }) => (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul> */}

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linksStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(({ id, icon, url }) => (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
