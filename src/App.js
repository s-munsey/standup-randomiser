import { useState } from "react";
import "./App.css";
import NameBadge from "./components/NameBadge";

const team = [
  "AP",
  "AG",
  "AD",
  "GJ",
  "KT",
  "LB",
  "LE",
  "RL",
  "RD",
  "SM",
  "TB",
  "WD",
  "YS",
];

const shuffled = shuffle(team);

function App() {
  const [next, setNext] = useState("");
  return (
    <div className="container">
      <NameBadge name={next} />
      <button onClick={() => setNext(shuffled.pop())}>Click me</button>
      <h1>Team</h1>
      {}
    </div>
  );
}

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
