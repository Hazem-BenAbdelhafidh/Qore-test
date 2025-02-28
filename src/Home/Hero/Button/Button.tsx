import classes from "./Button.module.css";

type Props = {
  text: string;
};

const Button = (props: Props) => {
  return <button className={classes.button}>{props.text}</button>;
};

export default Button;
