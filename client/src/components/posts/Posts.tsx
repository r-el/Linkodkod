import "./Posts.css";
import { useEffect, useState } from "react";
import type { IPost } from "../../@types/Post";
import { Post } from "../post/Post";
import { getAllPosts } from "../../services/postService";

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Posts
    const fetchPosts = async () => {
      try {
        const response = await getAllPosts();
        if (response.success && response.data) {
          const postsData = response.data;
          setPosts(postsData);
        } else {
          setError(response.err || "Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts: ", error);
        setError("Error during fetch posts, please try again");
      }
    };
    fetchPosts();
  }, []);

  if (error) {
    return <p className="error">{error}</p>;
  }
  return (
    <div id="posts-container">
      {posts && posts.length > 0 && posts.map((p: IPost) => <Post key={p.id} {...p}></Post>)}
      {error && <p className="error">{error}</p>}
    </div>
  );
};
