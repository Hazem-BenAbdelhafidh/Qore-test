import { NavLink } from "react-router-dom";
import classes from "./Link.module.css";

type Props = {
  name: string;
  url: string;
};

const Link = (props: Props) => {
  return (
    <NavLink
      to={props.url}
      className={({ isActive }) =>
        isActive ? classes.activeLink : classes.link
      }
    >
      {props.name}
    </NavLink>
  );
};

export default Link;
