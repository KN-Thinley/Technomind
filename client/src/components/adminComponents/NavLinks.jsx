import React from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="nav-link text-lg md:text-xl lg:text-base cursor-pointer group">
            <Link to={link.submenu ? "#" : link.link}>{link.name}</Link>
            {link.submenu && (
              <div>
                <div className="absolute top-5 hidden group-hover:block hover:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white px-4 pr-12 py-4">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.sublink[0].name}>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="text-md text-gray-600 my-3 hover:text-primary"
                            key={slink.name}
                          >
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
        </div>
      ))}
    </>
  );
};

export default NavLinks;
