import React from "react";
import { Friends } from "./Sidebar/Friends";
import { NavLink } from "react-router-dom";

import s from "./Navigation.module.scss";

export const Navigation = (props) => {
  const { state } = props;
  return (
    <nav className={s.nav}>
      <div className={s.link}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink activeClassName={s.activeLink} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink activeClassName={s.activeLink} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink activeClassName={s.activeLink} to="/music">
          Music
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink activeClassName={s.activeLink} to="/settings">
          Settings
        </NavLink>
      </div>
      <Friends person={state} />
    </nav>
  );
};
