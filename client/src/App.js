import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import About from "./pages/About";
import Design from "./components/Design";

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Design />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/incubation" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  );
};

export default App;
