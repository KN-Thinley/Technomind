import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
<<<<<<< HEAD
import AdminHome from "./pages/admin/AdminHome";
=======
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import About from "./pages/About";
import AppForm from "./components/AppliForm";
import ProInfo from "./components/ProInfo";
import AddInfo from "./components/AddInfo";
<<<<<<< HEAD
import Design from "./components/Design";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
<<<<<<< HEAD

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminHome />} />
=======
      <Route path="/services/incubation" element={<AppForm />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/proinfo" element={<ProInfo />} />
      <Route path="/addinfo" element={<AddInfo />} />
>>>>>>> 21051d03376c47f53f773f8fbe589d4dd0f9951e
    </Routes>
>>>>>>> e835384807c6eec1fc7c420e6630c9999c39bf1b
  );
};

export default App;
