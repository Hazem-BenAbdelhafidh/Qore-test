import classes from "./Stories.module.css";
import { stories } from "../../const/const";
import Story from "./Story/Story";
import Section from "../../components/Section/Section";
import StoryMobile from "./StoryMobile/StoryMobile";

const Stories = () => {
  const storiesComponents = stories.map((story) => {
    return (
      <>
        <Story
          key={story.title}
          title={story.title}
          image={story.image}
          content={story.content}
        />
        <StoryMobile
          key={story.content + story.title}
          title={story.title}
          image={story.image}
          content={story.content}
        />
      </>
    );
  });
  return (
    <Section title="Member stories">
      <div className={classes.stories_container}>{storiesComponents}</div>
    </Section>
  );
};

export default Stories;
