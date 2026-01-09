import { postData } from "../raw-data/post-data";
import PostItem from "./PostItem";

function handleLike(setLike) {
  setLike((prev) => prev + 1);
}

function handleDislike(like, setLike) {
  if (like < 1) return;
  setLike((prev) => prev - 1);
}

function Posts() {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postData.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            handleLike={handleLike}
            handleDislike={handleDislike}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
