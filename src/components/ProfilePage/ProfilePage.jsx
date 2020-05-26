import React from "react";
import { CreatePost } from "./CreatePost";
import { Posts } from "./Posts/Posts";
import { Profile } from "./Profile";

import s from "./Profile.module.scss";

export const ProfilePage = () => {
  return (
    <div>
      <div>
        <Profile />
        <div className={s.content}>
          <CreatePost />
          <Posts text="it`s my first comment!" />
          <Posts text="Fk off dude!" />
        </div>
      </div>
      Main content
    </div>
  );
};
