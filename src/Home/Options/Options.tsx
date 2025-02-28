import classes from "./Options.module.css";
import { options } from "../../const/const";
import Option from "./Option/Option";
import Section from "../../components/Section/Section";

const Options = () => {
  const optionsComponents = options.map((option) => {
    return (
      <Option
        key={option.title}
        content={option.content}
        image={option.image}
        title={option.title}
      />
    );
  });
  return (
    <Section title="Featured options" background="#f1ece1">
      <div className={classes.options}>{optionsComponents}</div>
    </Section>
  );
};

export default Options;
