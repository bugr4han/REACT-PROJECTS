import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaMoon,
  FaSun,
  FaStore,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

function MyHeader({ toggleDrawer }) {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const { productsInBasket } = useSelector((store) => store.basket);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className={"header"}>
      <div className="logo" onClick={() => navigate("/")}>
        <FaStore className="logo-icon" />
        <span>MyShop</span>
      </div>

      <div className="header-actions">
        {darkMode ? (
          <FaSun
            className="icon-btn"
            style={{ cursor: "pointer" }}
            onClick={toggleDarkMode}
          />
        ) : (
          <FaMoon
            className="icon-btn"
            style={{ cursor: "pointer" }}
            onClick={toggleDarkMode}
          />
        )}

        <Badge badgeContent={productsInBasket.length} color="warning">
          <FaShoppingCart
            className="icon-btn"
            style={{ cursor: "pointer" }}
            onClick={toggleDrawer(true)}
          />
        </Badge>
      </div>
    </header>
  );
}

export default MyHeader;
