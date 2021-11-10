import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const initialPagesDisplayed = [
  {
    name: "home",
    isDisplayed: true,
    label: "Home",
    className: "button is-primary",
  },
  {
    name: "todoLsit",
    isDisplayed: false,
    label: "TodoList",
    className: "button is-white",
  },
  {
    name: "ticTacToe",
    isDisplayed: false,
    label: "TicTacToe",
    className: "button is-white",
  },
  {
    name: "weatherApp",
    isDisplayed: false,
    label: "WeatherApp",
    className: "button is-white",
  },
];

function App() {
  const [pagesDisplayed, setPagesDisplayed] = useState(initialPagesDisplayed);
  function handleClick(event) {
    const { name } = event.target;
    const newPagesDiplayed = pagesDisplayed.map((page) => {
      if (name === page.name) {
        return { ...page, isDisplayed: true };
      } else {
        return { ...page, isDisplayed: false };
      }
    });
    setPagesDisplayed(newPagesDiplayed);
    console.log(pagesDisplayed);
  }

  return (
    <div>
      <NavBar pagesDisplayed={pagesDisplayed} handleClick={handleClick} />
      <MainContent pagesDisplayed={pagesDisplayed} />
      <Footer />
    </div>
  );
}

export default App;
