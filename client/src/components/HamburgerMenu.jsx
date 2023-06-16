import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const HamburgerMenu = () => {
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
          <ul>
            <div>
              <Link to="/">Home</Link>
            </div>

            {links.map((link) => (
              <div>
                {link.name}
                {link.submenu && (
                  <div>
                    <div className="absolute top-5 hidden group-hover:block hover:block">
                      <div className="py-3">
                        <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                      </div>
                      <div className="bg-white px-4 pr-12 py-4">
                        {link.sublinks.map((mysublinks) => (
                          <div>
                            {mysublinks.sublink.map((slink) => (
                              <li className="text-md text-gray-600 my-3 hover:text-primary">
                                <Link to={slink.link}>{slink.name}</Link>
                              </li>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </nav>
      </div>
      <div className="menu-bg" id="menu-bg"></div>
    </>
  );
};

export default HamburgerMenu;
