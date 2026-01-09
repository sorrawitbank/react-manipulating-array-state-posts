import { useState } from "react";
import { postData } from "../raw-data/post-data";
import PostItem from "./PostItem";

function handleLike(setLike) {
  setLike((prev) => prev + 1);
}

function handleDislike(setLike) {
  setLike((prev) => prev - 1);
}

function Posts() {
  console.log();
  

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postData.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            useState={useState(post.likes)}
            handleLike={handleLike}
            handleDislike={handleDislike}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
