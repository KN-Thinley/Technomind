import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

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
      <h1>Success!</h1>
      <p>Your submission was successful.</p>
      <p>Thank you for your participation.</p>
      {/* Additional content or components */}
    </animated.div>
  );
};

export default Success;
