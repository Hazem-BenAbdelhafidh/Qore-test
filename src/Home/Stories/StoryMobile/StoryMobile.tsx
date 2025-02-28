import Button from "../Story/Button/Button";
import classes from "./StoryMobile.module.css";

type Props = {
  image: string;
  title: string;
  content: string;
};

const StoryMobile = (props: Props) => {
  return (
    <div className={classes.story}>
      <h3 className={classes.story_title}>{props.title}</h3>
      <div className={classes.story_info}>
        <img src={props.image} alt={props.title} loading="lazy"></img>
        <p className={classes.story_content}>{props.content}</p>
      </div>
      <div className={classes.story_button}>
        <Button text="Read more" />
      </div>
    </div>
  );
};

export default StoryMobile;
