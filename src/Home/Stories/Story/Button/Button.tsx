import { Link } from "react-router-dom";
import classes from "./Button.module.css";

type Props = {
  text: string;
};

const Button = (props: Props) => {
  return (
    <Link to="/" className={classes.button}>
      {props.text}
    </Link>
  );
};

export default Button;
