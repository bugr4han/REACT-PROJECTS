import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1 className="home-title">FIREBASE</h1>

      <div className="home-button-group">
        <button className="home-btn" onClick={() => navigate("/login")}>
          Giriş Yap
        </button>
        <button className="home-btn" onClick={() => navigate("/register")}>
          Kaydol
        </button>
      </div>
    </div>
  );
}

export default Home;
