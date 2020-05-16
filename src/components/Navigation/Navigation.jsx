import React from "react";

import s from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>
        <a href="#q">Music</a>
      </div>
      <div>
        <a href="#q">Settings</a>
      </div>
    </nav>
  );
};
