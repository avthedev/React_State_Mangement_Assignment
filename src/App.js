import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.

  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <PostCreate posts={posts} setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
