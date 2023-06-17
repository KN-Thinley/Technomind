import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
<<<<<<< HEAD
import AdminHome from "./pages/admin/AdminHome";
=======
>>>>>>> 0bbefd1505326b93d52ce69da0cbfc68729bd9a8
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import About from "./pages/About";
import Design from "./components/Design";

import Incubation from "./pages/Incubation";
import AddInfo from "./components/AddInfo";
<<<<<<< HEAD
import Register from "./pages/Register";
import MenSignup from "./pages/MenSignup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/mentorSignup" element={<MenSignup />} />
      <Route path="/menteeSignup" element={<MenSignup />} />

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/services/incubation" element={<AppForm />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/proinfo" element={<ProInfo />} />
      <Route path="/addinfo" element={<AddInfo />} />
    </Routes>
=======
import ProInfo from "./components/ProInfo";
import Success from "./pages/Success";

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/success" element={<Success />} />
        <Route path="/services/incubation" element={<Incubation />} />
        <Route path="/services/incubation/additional" element={<AddInfo />} />
        <Route path="/services/incubation/final" element={<ProInfo />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </div>
>>>>>>> 0bbefd1505326b93d52ce69da0cbfc68729bd9a8
  );
};

export default App;
