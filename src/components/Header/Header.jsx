import React from "react";

import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <img
        alt="логотип"
        src="https://i.pinimg.com/originals/4f/2b/98/4f2b98931b85cb48df1a1dcfce9ca876.jpg"
      />
    </header>
  );
};
