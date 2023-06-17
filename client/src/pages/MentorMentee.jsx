import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProfilePage() {
  const [mentors, setMentors] = useState([]);
  const [mentees, setMentees] = useState([]);

  useEffect(() => {
    // Fetch available mentors
    axios
      .get("/user/getMentors")
      .then((response) => {
        setMentors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mentors:", error);
      });

    // Fetch available mentees
    axios
      .get("/user/getMentees")
      .then((response) => {
        setMentees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mentees:", error);
      });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Banner */}
      <div className="flex items-center justify-end w-screen h-screen heroBanner bg-[url('./assets/heroBanner.png')] bg-cover bg-no-repeat text-white	">
        <div className="text-center mr-auto lg:ml-40 md:ml-20 ml-10">
          <div
            className="text-7xl animate-bottom"
            style={{ textAlign: "left" }}
          >
            Mentorship
          </div>
        </div>
        {/* <div>
          <button
            className="fixed bottom-4 right-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={openChatbot}
          ></button>
        </div> */}
      </div>

      <div className="section flex w-full justify-around align-middle m-7 relative">
        <div className="userProfile w-1/4 flex flex-col justify-center align-middle p-5 text-center rounded-lg bg-slate-300 gap-4	">
          <h2 className="text-xl">Your Mentee Profile</h2>
          {/* Render user profile data */}
          <div
            className="profilePic w-24 h-24 bg-black rounded-full m-auto my-5
"
          >
            <img src="#" alt="" />
          </div>
          <div>John Doe</div>
          <div>Contact: 123123</div>
          <div>"I love Pineapples"</div>
          <div>Field: Business</div>
        </div>

        <button className="absolute connect">Connect</button>

        <div className="userProfile w-1/4 flex flex-col justify-center align-middle p-5 text-center rounded-lg bg-slate-300 gap-4	">
          <h2 className="text-xl">Available Mentors</h2>
          {/* Render user profile data */}
          <div className="profilePic w-24 h-24 bg-black rounded-full m-auto my-5">
            <img src="#" alt="" />
          </div>
          <div>John Doe</div>
          <div>Contact: 123123</div>
          <div>"I love Pineapples"</div>
          <div>Field: Business</div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProfilePage;
