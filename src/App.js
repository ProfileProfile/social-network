import React from "react";
import "./App.css";

import { Technologies } from "./components/Technologies";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Technologies />
      <Header />
    </div>
  );
};

export default App;
