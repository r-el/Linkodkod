import { useAuth } from "../../context/AuthContext";
import "./NavMenu.css";
import { Link } from "react-router-dom";
export default () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav>
      <ul id="nav-menu">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to={"/post/new"}>New Post</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
