import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AdminHome from "./pages/admin/AdminHome";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminHome />} />
    </Routes>
  );
};

export default App;
