import classes from "./NavLink.module.css";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  url: string;
};

const NavLink = (props: Props) => {
  return (
    <Link to={props.url} className={classes.link}>
      {props.name}
    </Link>
  );
};

export default NavLink;
