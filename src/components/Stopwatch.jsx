import { useState, useEffect } from "react";

const Stopwatch = ({ initial }) => {
  const [timer, setTimer] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev - 1 === 0) {
          clearInterval(id);
          setTimer(0);
        } else return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
      <h1>Stop-Watch</h1>
      <h1>{timer}</h1>
      {/* <button
        style={{
          background: "none",
          borderStyle: "none",
          outline: "none",
          cursor: "pointer",
          padding: "10px",
        }}
        onClick={handleStart}
      >
        <PlayFill size="40" />
      </button>
      <button
        style={{
          background: "none",
          borderStyle: "none",
          outline: "none",
          cursor: "pointer",
          padding: "10px",
        }}
        onClick={handleStop}
      >
        <PauseFill size="40" />
      </button>
      <button
        style={{
          background: "none",
          borderStyle: "none",
          outline: "none",
          cursor: "pointer",
          padding: "10px",
        }}
        onClick={handleReset}
      >
        <ArrowRepeat size="40" />
      </button> */}
    </div>
  );
};

export default Stopwatch;
