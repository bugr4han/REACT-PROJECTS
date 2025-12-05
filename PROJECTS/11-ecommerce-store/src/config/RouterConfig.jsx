import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetails from "../Components/ProductDetails";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product-details/:id" element={<ProductDetails />}></Route>
    </Routes>
  );
}

export default RouterConfig;
