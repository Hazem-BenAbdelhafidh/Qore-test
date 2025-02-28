import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { footerNav } from "../../const/const";
import Fish from "../../assets/Fish";
import Facebook from "../../assets/Facebook";
import Instagram from "../../assets/Instagram";
import LinkedIn from "../../assets/LinkedIn";

const currentYear = new Date().getFullYear();
const Footer = () => {
  const links = footerNav.map((nav) => {
    return (
      <Link key={nav.name} to={nav.url} className={classes.footer_link}>
        {nav.name}
      </Link>
    );
  });
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_container}>
        <div className={classes.footer_links}>
          <div className={classes.footer_logo}>
            <Fish color="#DDCFB4" />
          </div>
          {links}
        </div>
        <div className={classes.footer_socials}>
          <Link to="/">
            <Facebook />
          </Link>
          <Link to="/">
            <Instagram />
          </Link>
          <Link to="/">
            <LinkedIn />
          </Link>
        </div>
      </div>
      <span className={classes.footer_copyright}>
        © {currentYear || "2024"} Central Texas Fly Fishing All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
