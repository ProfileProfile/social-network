import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { ProfilePage } from "./components/ProfilePage";
import { Dialogs } from "./components/Dialogs";
import { Music } from "./components/Music";
import { Settings } from "./components/Settings";
import { News } from "./components/News";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navigation />
        <div className="content">
          <Route path="/profile" component={ProfilePage} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/news" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
