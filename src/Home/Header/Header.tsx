import classes from "./Header.module.css";
import Logo from "../../components/Logo/Logo";
import Nav from "./Nav/Nav";
import BurgerButton from "./BurgerButton/BurgerButton";

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.header}>
        <Logo />
        <BurgerButton />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
