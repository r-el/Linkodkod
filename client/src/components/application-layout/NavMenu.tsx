import { Link } from "react-router-dom";
export default () => (
  <nav>
    <ul id="nav-menu">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
    </ul>
  </nav>
);
