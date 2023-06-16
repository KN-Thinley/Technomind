import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const HamburgerMenu = () => {
  const [expandedLinks, setExpandedLinks] = useState([]);

  const toggleLinkExpansion = (linkName) => {
    if (expandedLinks.includes(linkName)) {
      setExpandedLinks(expandedLinks.filter((name) => name !== linkName));
    } else {
      setExpandedLinks([...expandedLinks, linkName]);
    }
  };

  useEffect(() => {
    const menuOnClick = () => {
      document.getElementById("menu-bar").classList.toggle("change");
      document.getElementById("nav").classList.toggle("change");
      document.getElementById("menu-bg").classList.toggle("change-bg");
    };

    document.getElementById("menu-bar").addEventListener("click", menuOnClick);

    return () => {
      document
        .getElementById("menu-bar")
        .removeEventListener("click", menuOnClick);
    };
  }, []);

  return (
    <>
      <div id="menu">
        <div id="menu-bar">
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className="nav" id="nav">
          <ul className=" mt-5">
            <div className="text-2xl flex flex-col gap-5 mr-2">
              <Link to="/" className="main-link">
                Home
              </Link>
              {links.map((link) => (
                <div key={link.name}>
                  <div
                    onClick={() => toggleLinkExpansion(link.name)}
                    className="link"
                  >
                    {link.name}
                  </div>
                  {link.submenu && expandedLinks.includes(link.name) && (
                    <div className="submenu mt-2">
                      {link.sublinks.map((sublink) => (
                        <div key={sublink.sublink[0].name}>
                          {sublink.sublink.map((slink) => (
                            <li
                              key={slink.name}
                              className="text-lg text-gray-600 mr-10 hover:text-primary sublink"
                            >
                              <Link to={slink.link} className="sublink-text">
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ul>
        </nav>
      </div>
      <div className="menu-bg" id="menu-bg"></div>
    </>
  );
};

export default HamburgerMenu;
