import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import About from "./pages/About";

import Incubation from "./pages/Incubation";
import AddInfo from "./components/AddInfo";
import ProInfo from "./components/ProInfo";
import Success from "./pages/Success";

const App = () => {
  return (
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
  );
};

export default App;
