import { useState, useEffect } from "react";
import Start from "./components/Start";
import CountDown from "./components/CountDown";
import Cards from "./components/Cards";
import "./css/App.css";
import "./css/CountDown.css";
import "./css/Start.css";
import "./css/Card.css";
import "./css/Finish.css";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    if (startGame) {
      const timer = setTimeout(() => {
        setShowCards(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [startGame]);

  return (
    <>
      <div className="container">
        {startGame ? (
          <>
            {!showCards && <CountDown />}
            {showCards && <Cards />}
          </>
        ) : (
          <Start setStartGame={setStartGame} />
        )}
      </div>
    </>
  );
}

export default App;
