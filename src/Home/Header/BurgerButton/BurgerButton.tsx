import classes from "./BurgerButton.module.css";
import Burger from "../../../assets/Burger";

const BurgerButton = () => {
  return (
    <button className={classes.burger_button}>
      <Burger />
    </button>
  );
};

export default BurgerButton;
