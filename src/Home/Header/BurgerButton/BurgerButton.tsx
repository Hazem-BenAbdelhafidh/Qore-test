import classes from "./BurgerButton.module.css";
import Burger from "../../../assets/Burger";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

const BurgerButton = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const clickHandler = () => {
    setShowNavigation((prev) => !prev);
  };
  return (
    <>
      <button className={classes.burger_button} onClick={clickHandler}>
        <Burger />
      </button>
      {showNavigation && <MobileNavigation />}
    </>
  );
};

export default BurgerButton;
