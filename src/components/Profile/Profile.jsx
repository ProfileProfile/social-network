import React from "react";

import s from "./Profile.module.scss";
import { CreatePost } from "./CreatePost";
import { Posts } from "./Posts/Posts";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://i.pinimg.com/originals/62/65/8c/62658ce5c2ddcbc473312dde1441e736.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        <CreatePost />
        <Posts text="it`s my first comment!" />
        <Posts text="Fk off dude!" />
      </div>
      Main content
    </div>
  );
};
