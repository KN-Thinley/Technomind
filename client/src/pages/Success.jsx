import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import tickImg from "./../assets/tick.png"

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to another page after 2 seconds
    const timeout = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);   

  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="success-page" style={fade}>
      <div className="flex items-center justify-center h-screen">
      <div className="bg-green-200 border border-green-500 p-4 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center"><img src={tickImg} alt="img" className="rounded-full"/></div>
        <h2 className="text-base">Your submission was successful.</h2>
        <p>Thank you for your participation.</p>
      </div>
      </div>
      {/* Additional content or components */}
    </animated.div>
  );
};

export default Success;
