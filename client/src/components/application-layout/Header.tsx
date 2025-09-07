import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Slogan from "./Slogan";

export default () => {
  return (
    <header id="header">
      <Logo />
      <Slogan />
    </header>
  );
};
