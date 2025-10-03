import React from "react";


function DigitBox({ digit }) {
  return (
    <div
      style={{
        display: "inline-block",
        width: "60px",
        height: "80px",
        margin: "4px",
        background: "#111",
        color: "#FFE81F", // 
        fontSize: "2.5rem",
        fontFamily: "monospace",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: "80px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(255, 232, 31, 0.6)",
      }}
    >
      {digit}
    </div>
  );
}


function Counter({ value }) {
  const paddedValue = String(value).padStart(5, "0"); 
  const digits = paddedValue.split(""); 

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {digits.map((d, i) => (
        <DigitBox key={i} digit={d} />
      ))}
    </div>
  );
}

function App({ value }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "monospace" }}>
        Counter
      </h1>
      <Counter value={value} />
    </div>
  );
}

export default App;
