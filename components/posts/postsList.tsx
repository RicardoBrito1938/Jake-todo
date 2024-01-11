import React from "react";
import { c } from "../UI/Card/index";

import PostItem from "./postItem";
import { useAppSelector } from "../../store";

const PostList = () => {
  const posts = useAppSelector(state => state.posts);
  console.log(posts, "posts");

  const Created = () => {
    return posts.length;
  };
  console.log(Created);

  return (
    <c.text>
      {Array.isArray(posts) &&
        posts.map(post => (
          <PostItem
            key={post.id}
            id={post.id}
            content={post.name}
            done={post.done}
          />
        ))}
    </c.text>
  );
};

export default PostList;
