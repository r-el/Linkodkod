import "./App.css";
import AplicationLayout from "./components/application-layout/AplicationLayout.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/application-layout/NotFoundPage.tsx";
import { Posts } from "./components/posts/Posts.tsx";
import { PostDetailPage } from "./pages/PostDetailPage.tsx";
import NewPostPage from "./pages/NewPostPage.tsx";
import Login from "./components/auth/Login.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import Register from "./components/auth/Register.tsx";
import HomePage from "./pages/HomePage.tsx";

export default () => {
  return (
    <AuthProvider>
      <Router>
        <AplicationLayout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/post">
              <Route path="new" element={<NewPostPage />} />
              <Route path=":id" element={<PostDetailPage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AplicationLayout>
      </Router>
    </AuthProvider>
  );
};
