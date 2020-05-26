import React from "react";

import s from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://i.pinimg.com/originals/62/65/8c/62658ce5c2ddcbc473312dde1441e736.jpg" />
      </div>
      <div className={s.descript}>ava + description</div>
    </div>
  );
};
