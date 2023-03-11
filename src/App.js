import { useState } from "react";
import "./App.css";
import NameBadge from "./components/NameBadge";
import TeamList from "./components/TeamList";

const team = [
  "Alistair",
  "Andrey",
  "Ayuub",
  "Goderzi",
  "Keegan",
  "Leri",
  "Lili-Mae",
  "Rob",
  "Rytis",
  "Shaun",
  "Thomas",
  "Wojciech",
  "Yerzhan",
];

const shuffled = shuffle(team);
let clickCount = 0;

function App() {
  const [next, setNext] = useState("");
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="container">
      <NameBadge name={next} isShowing={isShowing} />
      <button
        className="button-27"
        onMouseUp={() => {
          if (shuffled.length > 0) {
            setNext(shuffled.pop());
          } else {
            clickCount++;
            if (clickCount > 16) {
              setNext("'...'");
            } else if (clickCount > 15) {
              setNext("LINE");
            } else if (clickCount > 14) {
              setNext("THIS ");
            } else if (clickCount > 13) {
              setNext("CROSS");
            } else if (clickCount > 12) {
              setNext("DON'T");
            } else if (clickCount > 11) {
              setNext("if you didn't know the combination...");
            } else if (clickCount > 10) {
              setNext("YOU JUST REACHED ACROSS");
            } else if (clickCount > 9) {
              setNext("OH MY GOD I CAN'T BELIEVE");
            } else if (clickCount > 8) {
              setNext("this is a NO TOUCHING zone");
            } else if (clickCount > 7) {
              setNext("do not touch this");
            } else if (clickCount > 6) {
              setNext("how dare you, if you touch that again..");
            } else if (clickCount > 5) {
              setNext("don't touch that button");
            } else if (clickCount > 3) {
              setNext("Stop clicking");
            } else {
              setNext("Fin");
            }
          }
          setIsShowing(true);
        }}
        onMouseDown={() => {
          setIsShowing(false);
        }}
      >
        Click me
      </button>
      <TeamList items={getListItems()} />
    </div>
  );
}

const getListItems = () => {
  const list = [...shuffled];
  return list.sort().map((name) => <li>{name}</li>);
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default App;
