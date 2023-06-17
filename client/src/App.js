import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AdminHome from "./pages/admin/AdminHome";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import About from "./pages/About";
import AppForm from "./components/AppliForm";
import ProInfo from "./components/ProInfo";
import AddInfo from "./components/AddInfo";
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
  );
};

export default App;
