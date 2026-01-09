function PostItem(props) {
  console.log(props.post.id);

  return (
    <div className="post-item">
      <div className="post-header">
        <h2>{props.post.title}</h2>
        <div className="post-social-media-stats">
          <span className="stats-topic">Likes: </span>
          <span className="post-likes">{props.useState[0]}</span>
        </div>
      </div>
      <p className="post-content">{props.post.content}</p>
      <div className="post-actions">
        <button
          onClick={() => props.handleLike(props.useState[1])}
          className="like-button"
        >
          Like
        </button>
        <button
          onClick={() => props.handleDislike(props.useState[1])}
          className="dislike-button"
        >
          Dislike
        </button>
      </div>
    </div>
  );
}

export default PostItem;
