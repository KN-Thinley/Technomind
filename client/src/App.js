import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Login";
import SignupForm from "./components/Signup";

const App = () => {
  return (
    <div>
      <LoginForm />
      {/* <SignupForm /> */}
    </div>
  );
};

export default App;
