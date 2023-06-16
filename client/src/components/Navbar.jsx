import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");

    if (isLoaded) {
      let delay = 0;
      navLinks.forEach((link) => {
        link.style.animation = `fadeIn 2s ease forwards ${delay}s`;
        delay += 0.1;
      });
    }
  }, [isLoaded]);

  return (
    <>
      <nav
        className={` flex fixed w-screen  items-center justify-between lg:justify-around md:gap-4 md:gap-12 lg:gap-20 text-white text-base p-5 expand-lg main-nav 
        ${isLoaded ? "show-links" : ""} backdrop-blur	z-50`}
        id="content"
      >
        <div className="logo flex items-center justify-center gap-2">
          <Link
            to="/"
            className="flex justify-center items-center gap-2 animate-left"
          >
            <img src={logo} alt="/user" className="h-20 w-full" />
          </Link>
        </div>
        {/* <div className="logo flex items-center justify-center gap-2">
          <img
            className="logo transition-transform duration-300 transform hover:scale-125"
            src={ologo}
            alt="Logo"
          />
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300"
            src={title}
            alt="Title Image"
          />
        </div> */}
        <div className="lists flex items-center justify-center">
          <ul className="text-white flex">
            <div className="hidden lg:ul-lists lg:flex md:gap-8 lg:gap-18">
              <Link to="/" className="nav-link text-lg md:text-xl lg:text-base">
                Home
              </Link>
              <NavLinks />
            </div>
          </ul>
        </div>
        <div className="relative w-60 lg:hidden">
          <HamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
