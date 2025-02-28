import classes from "./Logo.module.css";
import Fish from "../../assets/Fish";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Fish />
      <span className={classes.logo_title}>Central Texas Fly Fishing</span>
    </div>
  );
};

export default Logo;
