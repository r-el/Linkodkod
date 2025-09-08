import "./Posts.css";
import { useEffect, useState } from "react";
import type { IPost } from "../../@types/Post";
import { Post } from "../post/Post";
import { getAllPosts } from "../../services/postService";

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    // Load Posts
    const fetchPosts = async () => {
      const response = await getAllPosts();
      if (response.success && response.data) {
        const postsData = response.data;
        setPosts(postsData);
      } else {
        // TODO: setError() state..
        console.error(response.err || "Failed to fetch posts");
      }
    };
    try {
      fetchPosts();
    } catch (error) {
      // TODO: setError() state..
      console.error("Error fetching posts: ", error);
    }
  }, []);

  return (
    <div id="posts-container">
      {posts && posts.length > 0 && posts.map((p: IPost) => <Post key={p.id} {...p}></Post>)}
    </div>
  );
};
