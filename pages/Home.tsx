import { NextPage } from "next";
import {
  About,
  Design,
  Footer,
  Projects,
  RevealText,
  Review,
  Skills,
  Top,
  Waves,
  Welcome,
} from "../components";

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = ({}) => {
  return (
    <>
      <Top />

      <Welcome />

      <About />

      <Projects />

      <Waves />

      <Skills />

      <RevealText />

      <Design />

      <Review />

      <Footer />
    </>
  );
};

export default HomePage;
