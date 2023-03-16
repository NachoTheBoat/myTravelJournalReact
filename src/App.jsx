import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./Components/Nav.jsx";
import Card from "./Components/Card";
import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.img}
        title={item.title}
        description={item.description}
        key={item.id}
        pais={item.pais}
        location={item.location}
      />
    );
  });

  return (
    <div className="wrapper">
      <Nav />
      {cards}
    </div>
  );
}

export default App;
