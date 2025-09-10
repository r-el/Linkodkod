import { Posts } from "../components/posts/Posts";
import { useAuth } from "../context/AuthContext";

export default () => {
  return useAuth().isAuthenticated ? <Posts /> : <p>Unable to view posts. Please log in first </p>;
};
