import { NavLink } from "react-router-dom";
import classes from "./MobileNavigation.module.css";
import { mainNav } from "../../../../const/const";

const MobileNavigation = () => {
  return (
    <div className={classes.navigation}>
      <nav
        style={{
          width: "100%",
          padding: "8px",
        }}
      >
        <ul className={classes.navigation_list}>
          {mainNav.map((nav) => {
            return (
              <li key={nav.name} className={classes.navigation_list_item}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.activeLink : classes.link
                  }
                  to={nav.url}
                >
                  {nav.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;
