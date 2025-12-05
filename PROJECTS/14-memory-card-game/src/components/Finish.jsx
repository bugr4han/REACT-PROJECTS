import React from "react";

function Finish({ score, correctCount, wrongCount, moveCount, onRestart }) {
  return (
    <div className="finish-container">
      <div className="finish-card">
        <h2>Game Completed!</h2>

        <div className="stats">
          <div className="stat-item">
            <span className="label">Total Score:</span>
            <span className="value">{score}</span>
          </div>

          <div className="stat-item">
            <span className="label">Correct Matches:</span>
            <span className="value">{correctCount}</span>
          </div>

          <div className="stat-item">
            <span className="label">Wrong Matches:</span>
            <span className="value">{wrongCount}</span>
          </div>

          <div className="stat-item">
            <span className="label">Total Moves:</span>
            <span className="value">{moveCount}</span>
          </div>
        </div>

        <button className="restart-button" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Finish;
