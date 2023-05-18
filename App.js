import React, { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 300, y: 300 });
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setPosition({
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
    });
    setCount(prevCount => prevCount + 1);
    setTimeout(() => {
      setPosition({x:-100, y:-100});
    }, 20000);
  };

  return (
    <div className="App">
      <div className="score">점수:{count}</div>
      <div className="background">
        <div
          className="dot"
          style={{ left: position.x, top: position.y }}
          onClick={handleClick}
        ></div>
      </div>
    </div>
    
  );
}

export default App;