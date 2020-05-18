import React from "react";

import s from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a href="/profile">Profile</a>
      </div>
      <div>
        <a href="/dialogs">Messages</a>
      </div>
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
