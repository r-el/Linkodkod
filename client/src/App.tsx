import "./App.css";
import AplicationLayout from "./components/application-layout/AplicationLayout.tsx";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/application-layout/NotFoundPage.tsx";
import { Posts } from "./components/posts/Posts.tsx";
import { PostDetailPage } from "./pages/PostDetailPage.tsx";

export default () => {
  return (
    <AplicationLayout>
      <Routes>
        <Route index element={<Posts />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AplicationLayout>
  );
};
