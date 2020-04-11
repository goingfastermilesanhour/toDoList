import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoWidget from "./components/toDoWidgetComponent";
import { render } from "@testing-library/react";

function App() {
  return (
    <div className="App">
      <ToDoWidget />
    </div>
  );
}

export default App;
