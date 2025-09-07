import "./App.css";
import { Post } from "./components/post/Post";
import type { PostProps } from "./components/post/PostProps.js";
import { posts } from "./data/postsData.js";

export default () => {
  return (
    <>
      {posts.map((p: PostProps) => (
        <Post key={p.id} {...p}></Post>
      ))}
    </>
  );
};
