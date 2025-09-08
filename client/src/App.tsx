import { useEffect, useState } from "react";
import "./App.css";
import { Post } from "./components/post/Post";
import type { PostEntity } from "./components/post/PostEntity.js";
import { posts as postsData } from "./data/postsData.tsx";
import AplicationLayout from "./components/application-layout/AplicationLayout.tsx";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/application-layout/NotFoundPage.tsx";

export default () => {
  return (
    <AplicationLayout>
      <Routes>
        <Route index element={<Posts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AplicationLayout>
  );
};

function Posts() {
  const [posts, setPosts] = useState<PostEntity[]>([]);

  useEffect(() => {
    // Load Posts
    const fetchPosts = () => {
      setPosts(postsData);
      console.log("postsData", postsData);
    };
    try {
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <>{posts && posts.length > 0 && posts.map((p: PostEntity) => <Post key={p.id} {...p}></Post>)}</>;
}
