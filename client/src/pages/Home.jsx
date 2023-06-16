import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import { Chatbase } from "chatbase";

const Home = () => {
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

  useEffect(() => {
    // Add the Chatbase script dynamically to the document head
    const chatbaseScript = document.createElement("script");
    chatbaseScript.src = "https://www.chatbase.co/embed.min.js";
    chatbaseScript.id = "yf6SQMOv7u4Zi9ihYrCtf";
    chatbaseScript.defer = true;
    document.head.appendChild(chatbaseScript);

    // Clean up the Chatbase script when the component unmounts
    return () => {
      document.head.removeChild(chatbaseScript);
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

  const openChatbot = () => {
    // Open the Chatbase chatbot
    if (window && window.chatbase && window.chatbase.openChat) {
      window.chatbase.openChat();
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero Banner */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-[url('./assets/heroBanner.png')] bg-cover bg-no-repeat text-white	">
        <div className="text-center mr-auto lg:ml-40 md:ml-20 ml-10">
          <div className="text-7xl animate-bottom">Startup!</div>
        </div>
        <div>
          <button
            className="fixed bottom-4 right-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={openChatbot}
          ></button>
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

export default Home;
