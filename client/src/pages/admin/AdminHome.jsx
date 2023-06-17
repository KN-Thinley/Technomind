import AdminNavbar from "../../components/adminComponents/AdminNavbar";
import { useEffect, useRef } from "react";
import AdminFooter from "../../components/adminComponents/AdminFooter";

import img1 from "../../assets/svg/undraw_online_learning_re_qw08.svg";
import img2 from "../../assets/svg/undraw_data_trends_re_2cdy.svg";
import img3 from "../../assets/svg/undraw_my_universe_803e.svg";
const AdminHome = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const observer1 = createObserver(section1Ref);
    const observer2 = createObserver(section2Ref, 2);
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
      <AdminNavbar />
      {/* Hero Banner */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-[url('./assets/heroBanner.png')] bg-cover bg-no-repeat text-white	">
        <div className="text-center mr-auto lg:ml-40 md:ml-20 ml-10">
          <div className="text-7xl animate-bottom">Startup!</div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto lg:ml-40 ml-auto leading-loose relative">
          <div
            ref={section1Ref}
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
            ref={section2Ref}
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
            ref={section3Ref}
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
      <AdminFooter />
    </>
  );
};

export default AdminHome;
