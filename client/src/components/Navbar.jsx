import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const animateLeft = document.querySelectorAll(".animate-left");

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
        className={`flex fixed w-screen items-center justify-around gap-4 md:gap-12 lg:gap-20 text-white text-base p-5 expand-lg main-nav 
        ${isLoaded ? "show-links" : ""}`}
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
        <div className="lists flex items-center justify-center">
          <ul className="text-white flex">
            <div className="ul-lists flex gap-12 md:gap-16 lg:gap-18">
              <Link to="/" className="nav-link text-lg md:text-xl lg:text-base">
                Home
              </Link>
              <Link
                to="/about"
                className="nav-link text-lg md:text-xl lg:text-base"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="nav-link text-lg md:text-xl lg:text-base"
              >
                Services
              </Link>
              <Link
                to="/programs"
                className="nav-link text-lg md:text-xl lg:text-base"
              >
                Programs
              </Link>
              <Link
                to="/mentors"
                className="nav-link text-sm md:text-lg lg:text-base"
              >
                Mentors
              </Link>
              <Link
                to="/trainers"
                className="nav-link text-sm md:text-lg lg:text-base"
              >
                Trainers
              </Link>
              <Link
                to="/startup"
                className="nav-link text-sm md:text-lg lg:text-base"
              >
                Startup
              </Link>
              <Link
                to="/announcements"
                className="nav-link text-sm md:text-lg lg:text-base"
              >
                Announcements
              </Link>
              <Link
                to="/testimonials"
                className="nav-link text-sm md:text-lg lg:text-base"
              >
                Testimonials
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
