import React from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { Dialogs } from "./components/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navigation />
        <div className="content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
