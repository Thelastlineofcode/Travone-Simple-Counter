import React, { useEffect, useState } from "react";
import SecondsCounter from "./SecondsCounter";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <SecondsCounter seconds={seconds} />;
}

export default App;
