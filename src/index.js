import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ClassComponents from "./Components/ClassComponents";

function App() {
  return (
    <div className="App">
      <ClassComponents />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
