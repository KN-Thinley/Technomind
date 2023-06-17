import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const Testimonials = () => {
  const section1Ref = useRef(null);

  useEffect(() => {
    const observer1 = createObserver(section1Ref);

    return () => {
      if (observer1 && observer1.unobserve && section1Ref.current) {
        observer1.unobserve(section1Ref.current);
      }
    };
  }, []);

  const createObserver = (ref, index) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (index % 2 === 0) {
            entry.target.classList.add("slide-in-right");
          } else {
            entry.target.classList.add("slide-in-left");
          }
        } else {
          entry.target.classList.remove("slide-in-right");
          entry.target.classList.remove("slide-in-left");
        }
      });
    });

    observer.observe(ref.current);
    return observer;
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero Banner */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-[url('./assets/heroBanner.png')] bg-cover bg-no-repeat text-white	">
        <div className="text-center mr-auto lg:ml-40 md:ml-20 ml-10">
          <div className="text-7xl animate-bottom">
            What People Say About Us
          </div>
        </div>
      </div>

      {/* Section */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose relative">
          <div
            ref={section1Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleLeft z-30 text-left flex"
          >
            <Testimonial />
          </div>
        </div>
      </div>

      {/* Section */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose relative">
          <div className="w-full md:text-7xl text-5xl leading-loose sectionTitleLeft z-30 flex justify-center align-between pointer">
            +
          </div>
          <input type="text" className="userReview mr-5"></input>
          Post Something?
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Testimonials;
