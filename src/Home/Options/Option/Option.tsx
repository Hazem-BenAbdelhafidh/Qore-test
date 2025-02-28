import Arrow from "../../../assets/Arrow";
import Button from "./Button/Button";
import classes from "./Option.module.css";
import { useEffect, useState } from "react";

type Props = {
  image: string;
  title: string;
  content: string;
};
const Option = (props: Props) => {
  const [showOption, setShowOption] = useState(false);
  const width = window.innerWidth;

  useEffect(() => {
    if (width <= 768) {
      setShowOption(true);
    }

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowOption(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clickHandler = () => {
    setShowOption((prev) => !prev);
  };

  return (
    <div className={classes.option}>
      <div className={classes.option_header}>
        <h4>{props.title}</h4>
        <button
          className={classes.arrow}
          style={{
            rotate: showOption ? "0deg" : "180deg",
          }}
          onClick={clickHandler}
        >
          <Arrow />
        </button>
      </div>

      {showOption && (
        <div className={classes.option_content}>
          <img
            src={props.image}
            className={classes.option_image}
            alt={props.title}
            loading="lazy"
          />
          <div className={classes.option_text}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <Button text="Learn more" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Option;
