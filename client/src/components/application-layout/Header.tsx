import "./Header.css";
import Logo from "./Logo";
import Slogan from "./Slogan";
import NavMenu from "./NavMenu";

export default () => {
  return (
    <header id="header">
      <Logo />
      <Slogan />
      <NavMenu />
    </header>
  );
};
