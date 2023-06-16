import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AdminDashboard from "./components/adminComponents/AdminDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
