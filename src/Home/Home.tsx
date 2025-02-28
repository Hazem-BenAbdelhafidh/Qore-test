import classes from "./Home.module.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Stories from "./Stories/Stories";
import Options from "./Options/Options";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
      <main className={classes.main_container}>
        <Hero />
        <Options />
        <Stories />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
