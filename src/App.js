import { useState } from "react";
import "./App.css";
import NameBadge from "./components/NameBadge";

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
            setNext("Fin");
          }
          setIsShowing(true);
        }}
        onMouseDown={() => {
          setIsShowing(false);
        }}
      >
        Click me
      </button>
      <h1>Team</h1>
      <ul>{getListItems()}</ul>
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
