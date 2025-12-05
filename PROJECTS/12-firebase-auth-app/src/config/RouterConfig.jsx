import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import WhenUserLogin from "../components/WhenUserLogin";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/welcome" element={<WhenUserLogin />} />
    </Routes>
  );
}

export default RouterConfig;
