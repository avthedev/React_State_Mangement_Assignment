import React from "react";

function Post({ text, post, posts, setPosts }) {
  // Events
  const deleteHandler = () => {
    setPosts(posts.filter((el) => el !== post));
  };

  return (
    <div className="post">
      {text}
      <img src={text} />

      <br />
      <button onClick={deleteHandler} name="delete">
        Delete
      </button>
    </div>
  );
}

export default Post;
