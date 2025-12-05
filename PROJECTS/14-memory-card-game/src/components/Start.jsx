import React, { useState } from "react";

function Start({ setStartGame }) {
  return (
    <div className="start-container">
      <div className="start-title">
        <h1>WELCOME TO THE MEMORY CARD GAME</h1>
      </div>

      <div className="start-description">
        <p>
          Test your memory by matching pairs of cards. Find all matches with the
          fewest moves possible!
        </p>
      </div>

      <button className={"start-button"} onClick={() => setStartGame(true)}>
        START GAME
      </button>
    </div>
  );
}

export default Start;
