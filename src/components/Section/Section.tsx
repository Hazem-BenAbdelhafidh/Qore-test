import classes from "./Section.module.css";

type Props = {
  title: string;
  background?: string;
  children: React.ReactNode;
};

const Section = (props: Props) => {
  return (
    <section
      className={classes.section}
      style={{
        background: props.background ? props.background : "white",
      }}
    >
      <div className={classes.section_container}>
        <h2 className={classes.section_header}>{props.title}</h2>
        <div className={classes.children}>{props.children}</div>
      </div>
    </section>
  );
};

export default Section;
