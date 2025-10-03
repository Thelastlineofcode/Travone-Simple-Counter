import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

let count = parseInt(localStorage.getItem("count") || "0", 10);

if (count >= 20) {
  count = 0; //
}

count++;
localStorage.setItem("count", count);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App value={count} />
  </React.StrictMode>
);

setTimeout(() => {
  window.location.reload();
}, 1000);
