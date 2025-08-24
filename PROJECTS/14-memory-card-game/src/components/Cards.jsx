import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import { useState } from "react";
import Card from "./Card";
import Finish from "./Finish";

function Cards() {
  const initialItems = [
    { id: 1, img: img1, stat: "" },
    { id: 1, img: img1, stat: "" },
    { id: 2, img: img2, stat: "" },
    { id: 2, img: img2, stat: "" },
    { id: 3, img: img3, stat: "" },
    { id: 3, img: img3, stat: "" },
    { id: 4, img: img4, stat: "" },
    { id: 4, img: img4, stat: "" },
    { id: 5, img: img5, stat: "" },
    { id: 5, img: img5, stat: "" },
    { id: 6, img: img6, stat: "" },
    { id: 6, img: img6, stat: "" },
    { id: 7, img: img7, stat: "" },
    { id: 7, img: img7, stat: "" },
    { id: 8, img: img8, stat: "" },
    { id: 8, img: img8, stat: "" },
  ];

  const [items, setItems] = useState(
    [...initialItems].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const checkGameFinished = () => {
    return items.every((item) => item.stat === "correct");
  };

  const check = (current) => {
    setIsLocked(true);
    setMoveCount(moveCount + 1);

    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      setIsLocked(false);
      setCorrectCount(correctCount + 1);
      setScore(score + 10);

      // Oyun bitti mi kontrol et
      if (checkGameFinished()) {
        setTimeout(() => {
          setGameFinished(true);
        }, 500);
      }
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setWrongCount(wrongCount + 1);
      setScore(score - 5);

      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 750);
      setTimeout(() => {
        setIsLocked(false);
      }, 2000);
    }
  };

  const handleClick = (id) => {
    if (
      isLocked ||
      items[id].stat === "active" ||
      items[id].stat === "correct"
    ) {
      return;
    }

    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  const restartGame = () => {
    setItems([...initialItems].sort(() => Math.random() - 0.5));
    setPrev(-1);
    setIsLocked(false);
    setScore(0);
    setCorrectCount(0);
    setWrongCount(0);
    setMoveCount(0);
    setGameFinished(false);
  };

  if (gameFinished) {
    return (
      <Finish
        score={score}
        correctCount={correctCount}
        wrongCount={wrongCount}
        moveCount={moveCount}
        onRestart={restartGame}
      />
    );
  }

  return (
    <div className="card-container">
      <div className="card-items">
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
