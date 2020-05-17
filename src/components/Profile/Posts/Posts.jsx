import React from "react";
import s from "./Posts.module.scss";

export const Posts = () => {
  return (
    <div className={s.cont}>
      <img
        src="https://i.ytimg.com/vi/YVCyzVmxhAY/maxresdefault.jpg"
        alt="profile pic"
        className={s.avatar}
      />
      Posts 1
    </div>
  );
};
