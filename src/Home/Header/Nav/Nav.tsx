import classes from "./Nav.module.css";
import { mainNav } from "../../../const/const";
import Link from "../Link/Link";

const Nav = () => {
  const links = mainNav.map((link) => {
    return <Link key={link.name} name={link.name} url={link.url} />;
  });
  return <div className={classes.nav}>{links}</div>;
};

export default Nav;
