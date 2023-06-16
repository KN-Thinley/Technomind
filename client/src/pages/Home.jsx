import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-[url('./assets/heroBanner.png')] bg-cover bg-no-repeat text-white	">
        <div className="text-center mr-auto ml-40">
          <div className="text-7xl">Startup!</div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-black bg-cover bg-no-repeat text-white">
        <div className="text-center mr-auto ml-40">
          <div className="text-7xl">Find your Perfect Mentor!</div>
        </div>
      </div>
    </>
  );
};

export default Home;
