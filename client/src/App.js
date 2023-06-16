import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AppForm from "./components/appForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/incubationapp" element={<AppForm />} />
    </Routes>
  );
};

export default App;
