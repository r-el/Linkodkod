import "./Posts.css";
import { useEffect, useState } from "react";
import type { IPost } from "../../@types/Post";
import { Post } from "../post/Post";
import { posts as postsData } from "../../data/postsData";

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    // Load Posts
    const fetchPosts = () => {
      setPosts(postsData);
    };
    try {
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div id="posts-container">
      {posts && posts.length > 0 && posts.map((p: IPost) => <Post key={p.id} {...p}></Post>)}
    </div>
  );
};
