import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "./../assets/svg/undraw_online_learning_re_qw08.svg";
import img2 from "./../assets/svg/undraw_data_trends_re_2cdy.svg";
import img3 from "./../assets/svg/undraw_my_universe_803e.svg";
import Timeline from "../components/Timeline";

const About = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);
  const section10Ref = useRef(null);
  const section11Ref = useRef(null);
  const section12Ref = useRef(null);
  const section13Ref = useRef(null);
  const section14Ref = useRef(null);
  const section15Ref = useRef(null);

  useEffect(() => {
    const observer1 = createObserver(section1Ref, 1);
    const observer2 = createObserver(section2Ref, 2);
    const observer3 = createObserver(section3Ref, 3);
    const observer4 = createObserver(section4Ref, 4);
    const observer5 = createObserver(section5Ref, 5);
    const observer6 = createObserver(section6Ref, 6);
    const observer7 = createObserver(section7Ref, 7);
    const observer8 = createObserver(section8Ref, 8);
    const observer9 = createObserver(section9Ref, 9);
    const observer10 = createObserver(section10Ref, 10);
    const observer11 = createObserver(section11Ref, 11);
    const observer12 = createObserver(section12Ref, 12);
    const observer13 = createObserver(section13Ref, 13);
    const observer14 = createObserver(section14Ref, 14);
    const observer15 = createObserver(section15Ref, 15);

    return () => {
      cleanupObserver(observer1, section1Ref);
      cleanupObserver(observer2, section2Ref);
      cleanupObserver(observer3, section3Ref);
      cleanupObserver(observer4, section4Ref);
      cleanupObserver(observer5, section5Ref);
      cleanupObserver(observer6, section6Ref);
      cleanupObserver(observer7, section7Ref);
      cleanupObserver(observer8, section8Ref);
      cleanupObserver(observer9, section9Ref);
      cleanupObserver(observer10, section10Ref);
      cleanupObserver(observer11, section11Ref);
      cleanupObserver(observer12, section12Ref);
      cleanupObserver(observer13, section13Ref);
      cleanupObserver(observer14, section14Ref);
      cleanupObserver(observer15, section15Ref);
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

  const cleanupObserver = (observer, ref) => {
    if (observer && observer.unobserve && ref.current) {
      observer.unobserve(ref.current);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-[url('./assets/heroBanner.png')] bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 md:ml-20 ml-10">
          <div className="text-7xl animate-bottom">About Us</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline h-screen">
        <Timeline />
      </div>

      {/* Vision */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose relative">
          <div
            ref={section1Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleLeft z-30 text-left"
          >
            We Have a Vision!
          </div>
          <div
            ref={section2Ref}
            className="w-full md:text-base text-base leading-loose sectionTitleLeft z-30 text-left"
          >
            We want to make you the next billionaire! Come join us now at <br />{" "}
            Thimphu, Chagzamtong
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center ml-auto lg:mr-40 mr-auto leading-loose relative">
          <div
            ref={section3Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleRight z-30 text-right"
          >
            Our Mission.
          </div>
          <div
            ref={section4Ref}
            className="w-full md:text-base text-base leading-loose sectionTitleRight z-30 text-right"
          >
            We want to make you the next billionaire!
          </div>
        </div>
      </div>

      {/* Policy & Regulatory */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose relative">
          <div
            ref={section5Ref}
            className="w-full md:text-5xl text-2xl leading-loose sectionTitleLeft z-30 text-left"
          >
            Policy & Regulatory
          </div>
          <div
            ref={section6Ref}
            className="w-full md:text-base text-base leading-loose sectionTitleLeft z-30 text-left"
          >
            Our Policy & Regulatory services include:
          </div>
        </div>
      </div>

      {/* Framework */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center ml-auto lg:mr-40 mr-auto leading-loose relative">
          <div
            ref={section7Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleRight z-30 text-right"
          >
            Framework
          </div>
          <div
            ref={section8Ref}
            className="w-full md:text-base text-base leading-loose sectionTitleRight z-30 text-right"
          >
            Our framework is wordpress
          </div>
        </div>
      </div>

      {/* Mandates */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose relative">
          <div
            ref={section9Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleLeft z-30 text-left"
          >
            Mandates
          </div>
          <div
            ref={section10Ref}
            className="w-full md:text-base text-base leading-loose sectionTitleLeft z-30 text-left"
          >
            Rise up to the challenge!
          </div>
        </div>
      </div>

      {/* DoEE, EPD */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center ml-auto lg:mr-40 mr-auto leading-loose relative">
          <div
            ref={section11Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleRight z-30 text-right"
          >
            DoEE, EPD
          </div>
          <div
            ref={section12Ref}
            className="w-full md:text-base text-base leading-loose sectionTitleRight z-30 text-right"
          >
            We want to make you the next billionaire!
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose relative">
          <div
            ref={section13Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleLeft z-30 text-left"
          >
            Find your Perfect Mentors!
          </div>
          <div className="w-full imgContainer bg-slate-400	absolute z-10">
            <img src={img1} className="absolute imgInside z-20" alt="" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center ml-auto lg:mr-40 mr-auto leading-loose relative">
          <div className="w-full imgContainer2 bg-slate-400	absolute z-10">
            <img src={img2} className="absolute imgInside2 z-20" alt="" />
          </div>
          <div
            ref={section14Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleRight z-30 text-right"
          >
            Get in Touch with <br /> The Business Trends
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose relative">
          <div
            ref={section15Ref}
            className="w-full md:text-7xl text-5xl leading-loose sectionTitleLeft z-30 text-left"
          >
            Your Space to Shine!
          </div>
          <div className="w-full imgContainer3 bg-slate-400	absolute z-10">
            <img src={img3} className="absolute imgInside3 z-20" alt="" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
