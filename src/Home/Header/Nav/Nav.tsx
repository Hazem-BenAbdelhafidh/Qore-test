import classes from "./Nav.module.css";
import { mainNav } from "../../../const/const";
import NavLink from "../NavLink/NavLink";

const Nav = () => {
  const links = mainNav.map((link) => {
    return <NavLink key={link.name} name={link.name} url={link.url} />;
  });
  return <div className={classes.nav}>{links}</div>;
};

export default Nav;
