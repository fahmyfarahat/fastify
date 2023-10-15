import "./App.css";
import React, { useState, useEffect } from "react";

export function App() {
  const [apiResult, setApiResult] = useState("pending...");

  useEffect(() => {
    fetch("/api/test")
      .then((r) => r.text())
      .then(setApiResult)
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <h1>Hello World!</h1>
      <h2>API result is:</h2>
      <pre>{apiResult}</pre>
    </div>
  );
}
