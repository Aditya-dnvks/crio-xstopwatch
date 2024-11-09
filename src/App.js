import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0); // Time in seconds
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      `${minutes < 10 ? "0" + minutes : minutes}:` +
      `${seconds < 10 ? "0" + seconds : seconds}`
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={start} style={{ margin: "5px" }}>
        Start
      </button>
      <button onClick={reset} style={{ margin: "5px" }}>
        Reset
      </button>
    </div>
  );
}

export default App;
