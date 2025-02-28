import classes from "./Hero.module.css";
import hero from "./../../assets/hero.png";
import heroMobile from "./../../assets/Hero-mobile.png";
import Button from "./Button/Button";

const Hero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.hero}>
        <div>
          <h1>Central Texas Fly Fisihng</h1>
          <p>
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <div className={classes.button_container}>
            <Button text="Get started" />
          </div>
        </div>
        <picture>
          <source media="(min-width: 768px)" srcSet={hero} />
          <img src={heroMobile} alt="hero" loading="lazy" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
