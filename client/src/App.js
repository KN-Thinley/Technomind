import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AdminDashboard from "./components/adminComponents/AdminDashboard";
import AppForm from "./components/AppliForm";
import AddInfo from "./components/AddInfo";
import ProInfo from "./components/ProInfo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/appform" element={<AppForm />} />
      <Route path="/additional" element={<AddInfo />} />
      <Route path="/proposed" element={<ProInfo />} />

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
