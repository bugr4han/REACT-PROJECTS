import "./css/App.css";
import "./css/Myheader.css";
import "./css/Login.css";
import "./css/Register.css";
import "./css/Home.css";
import MyHeader from "./components/MyHeader";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import RouterConfig from "./config/RouterConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <MyHeader />
      <RouterConfig />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="dark"
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
