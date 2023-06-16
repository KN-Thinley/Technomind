import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Services = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const observer1 = createObserver(section1Ref);
    const observer2 = createObserver(section2Ref);
    const observer3 = createObserver(section3Ref);

    return () => {
      if (observer1 && observer1.unobserve && section1Ref.current) {
        observer1.unobserve(section1Ref.current);
      }
      if (observer2 && observer2.unobserve && section2Ref.current) {
        observer2.unobserve(section2Ref.current);
      }
      if (observer3 && observer3.unobserve && section3Ref.current) {
        observer3.unobserve(section3Ref.current);
      }
    };
  }, []);
  const createObserver = (ref) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-left");
        } else {
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
        <div className="text-center mr-auto ml-40">
          <div className="text-7xl animate-bottom">Services</div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose">
          <div
            ref={section1Ref}
            className="md:text-7xl text-5xl sectionTitleLeft"
          >
            Find your Perfect Mentor!
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose">
          <div
            ref={section2Ref}
            className="md:text-7xl text-5xl sectionTitleLeft"
          >
            Find your Perfect Mentor!
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose">
          <div
            ref={section3Ref}
            className="md:text-7xl text-5xl sectionTitleLeft"
          >
            Find your Perfect Mentor!
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Services;
