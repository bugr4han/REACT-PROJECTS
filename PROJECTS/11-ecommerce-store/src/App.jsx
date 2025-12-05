import { useState } from "react";

import MyHeader from "./components/MyHeader.jsx";
import Container from "@mui/material/Container";
import RouterConfig from "./config/RouterConfig.jsx";
import Loading from "./components/Loading.jsx";
import CartDrawer from "./components/CardDrawer.jsx";

import "./Css/App.css";
import "./Css/MyHeader.css";
import "./Css/Product.css";
import "./Css/ProductDetails.css";
import "./Css/Theme.css";
import "./Css/Drawer.css";

function App() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <>
      <Container maxWidth="xl">
        <MyHeader toggleDrawer={toggleDrawer} />
        <RouterConfig />
        <Loading />
        <CartDrawer open={open} toggleDrawer={toggleDrawer} />
      </Container>
    </>
  );
}

export default App;
