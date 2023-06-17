// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SignupForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [contact, setContact] = useState("");
//   const [selectedField, setSelectedField] = useState("");
//   const [profilePicture, setProfilePicture] = useState(null);

//   const handleFullNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const handleContactChange = (event) => {
//     const contactValue = event.target.value;
//     const toIntValue = parseInt(contactValue, 10);
//     setContact(toIntValue);
//   };

//   const handleFieldChange = (event) => {
//     setSelectedField(event.target.value);
//   };

//   const handleProfilePictureChange = (event) => {
//     const file = event.target.files[0];
//     setProfilePicture(file);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle signup logic here
//     // Handle signup logic here
//     if (!type || !password || !email || !name) {
//       console.error("Missing required fields");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("profilePic", profilePicture);
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("contact", contact);
//     formData.append("type", type);
//     formData.append("field", selectedField);

//     console.log("FormData", formData);

//     // Fetch API call
//     fetch("/user/signup", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle response data
//         console.log("Signup response:", data);
//       })
//       .catch((error) => {
//         // Handle error
//         console.error("Signup error:", error);
//       });
//   };

//   const type = sessionStorage.getItem("type");
//   console.log("type", type);

//   return (
//     <div className="flex justify-center items-center h-screen bg-[url('./assets/heroBanner.png')] bg-cover bg-no-repeat">
//       <form
//         className="bg-white shadow-md rounded px-24 py-12"
//         onSubmit={handleSubmit}
//       >
//         <div className="flex gap-20">
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="name"
//             >
//               Full Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="name"
//               type="text"
//               placeholder="Enter your full name"
//               value={name}
//               onChange={handleFullNameChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//           </div>
//         </div>
//         <div className="flex gap-20">
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="confirmPassword"
//             >
//               Confirm Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="confirmPassword"
//               type="password"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={handleConfirmPasswordChange}
//             />
//           </div>
//         </div>
//         <div className="flex gap-20">
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="contact"
//             >
//               Contact
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="contact"
//               type="Number"
//               placeholder="Enter your contact number"
//               value={contact}
//               onChange={handleContactChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="field"
//             >
//               Field
//             </label>
//             <select
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="field"
//               value={selectedField}
//               onChange={handleFieldChange}
//             >
//               <option value="">Select a field</option>
//               <option value="option1">Marketing</option>
//               <option value="option2">Legal</option>
//               <option value="option3">Finance</option>
//               <option value="option3">Tech</option>
//             </select>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="profilePicture"
//           >
//             Profile Picture
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="profilePicture"
//             type="file"
//             accept="image/*"
//             onChange={handleProfilePictureChange}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Sign Up
//           </button>
//         </div>
//         <Link to="/login" className="text-gray-700 text-sm hover:underline">
//           Don't you have account? LogIn
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const type = sessionStorage.getItem("type");
  const [formData, setFormData] = useState({
    profilePic: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: 0,
    type: type,
    field: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        // Handle error response from the server
        // Display error message or perform any desired actions
      }
    } catch (error) {
      // Handle fetch error
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url('./assets/heroBanner.png')] bg-cover bg-no-repeat">
      <form
        className="bg-white shadow-md rounded px-24 py-12"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-20">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your full name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contact"
            >
              Contact
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="Number"
              placeholder="Enter your contact number"
              onChange={handleChange}
              value={formData.contact}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="field"
            >
              Field
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="field"
              onChange={handleChange}
              value={formData.field}
            >
              <option value="">Select a field</option>{" "}
              <option value="Marketing">Marketing</option>{" "}
              <option value="Legal">Legal</option>{" "}
              <option value="Finance">Finance</option>{" "}
              <option value="Tech">Tech</option>{" "}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="profilePicture"
          >
            Profile Picture
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="profilePicture"
            type="file"
            accept="image/*"
            value={formData.profilePic}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <Link to="/login" className="text-gray-700 text-sm hover:underline">
          Don't you have an account? Log In
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
