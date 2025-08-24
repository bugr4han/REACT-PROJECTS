import "./css/App.css";
import "./css/Home.css";
import "./css/About.css";
import "./css/Product.css";
import "./css/Products.css";
import "./css/Contact.css";
import { Routes, Route } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import AboutEmployee from "./pages/AboutEmployee";
import AboutCompany from "./pages/AboutCompany";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <MyHeader />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="employee" element={<AboutEmployee />} />
          <Route path="company" element={<AboutCompany />} />
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
