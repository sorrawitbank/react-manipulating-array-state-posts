import { useState } from "react";
import { postData } from "../raw-data/post-data";
import PostItem from "./PostItem";

function Posts() {
  const [posts, setPosts] = useState(postData);

  function handleLike(postId) {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  }

  function handleDislike(postId) {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId && post.likes > 0
          ? { ...post, likes: post.likes - 1 }
          : post
      )
    );
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onLike={() => handleLike(post.id)}
            onDislike={() => handleDislike(post.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
