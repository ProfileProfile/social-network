import React from "react";
import { CreatePost } from "./CreatePost";
import { Posts } from "./Posts/Posts";
import { Profile } from "./Profile";

import s from "./Profile.module.scss";

export const ProfilePage = (props) => {
  const { posts } = props;

  const PostsItems = posts.postsText.map(({ text }) => <Posts text={text} />);

  return (
    <div>
      <div>
        <Profile />
        <div className={s.content}>
          <CreatePost />
          {PostsItems}
        </div>
      </div>
      Main content
    </div>
  );
};
