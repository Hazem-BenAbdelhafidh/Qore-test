import Button from "./Button/Button";
import classes from "./Story.module.css";

type Props = {
  image: string;
  title: string;
  content: string;
};

const Story = (props: Props) => {
  return (
    <div className={classes.story}>
      <img src={props.image} alt={props.title} loading="lazy"></img>
      <div className={classes.story_info}>
        <h3 className={classes.story_title}>{props.title}</h3>
        <p className={classes.story_content}>{props.content}</p>
        <Button text="Read more" />
      </div>
    </div>
  );
};

export default Story;
