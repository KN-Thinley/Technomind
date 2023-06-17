import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  const handleUserTypeSelection = (type) => {
    sessionStorage.setItem("type", type);
    setUserType(type);

    if (type === "Mentor") {
      navigate("/mentorSignup");
    } else if (type === "Mentee") {
      navigate("/menteeSignup");
    }
  };

  return (
    <div className="flex flex-col items-center gap-12 pt-8">
      <h2 className="text-5xl font-bold mb-4">Sign Up</h2>
      <h1 className="text-3xl font-sans font-semibold">
        What type of user are you?
      </h1>
      <div className="flex gap-4">
        <button
          className={`py-2 px-4 rounded ${
            userType === "Mentor" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleUserTypeSelection("Mentor")}
        >
          Mentor
        </button>
        <button
          className={`py-2 px-4 rounded ${
            userType === "Mentee" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleUserTypeSelection("Mentee")}
        >
          Mentee
        </button>
      </div>
    </div>
  );
};

export default Register;
