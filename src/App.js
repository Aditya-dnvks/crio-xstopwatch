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
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
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

    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Stopwatch</h1>
      <h2>Time: {formatTime(time)}</h2>
      <button onClick={start} style={{ margin: "5px" }}>
        {!intervalId ? "Start" : "Stop"}
      </button>
      <button onClick={reset} style={{ margin: "5px" }}>
        Reset
      </button>
    </div>
  );
}

export default App;
