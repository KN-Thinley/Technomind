import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default App;
