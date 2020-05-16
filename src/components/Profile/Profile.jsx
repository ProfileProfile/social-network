import React from "react";

import s from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://i.pinimg.com/originals/62/65/8c/62658ce5c2ddcbc473312dde1441e736.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>new posts</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
      Main content
    </div>
  );
};
