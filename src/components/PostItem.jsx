function PostItem(props) {
  return (
    <div className="post-item">
      <div className="post-header">
        <h2>{props.post.title}</h2>
        <div className="post-social-media-stats">
          <span className="stats-topic">Likes: </span>
          <span className="post-likes">{props.post.likes}</span>
        </div>
      </div>
      <p className="post-content">{props.post.content}</p>
      <div className="post-actions">
        <button onClick={props.onLike} className="like-button">
          Like
        </button>
        <button onClick={props.onDislike} className="dislike-button">
          Dislike
        </button>
      </div>
    </div>
  );
}

export default PostItem;
