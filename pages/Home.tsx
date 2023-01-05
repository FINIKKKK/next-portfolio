import { NextPage } from "next";
import {
  About,
  Design,
  Footer,
  Header,
  Projects,
  RevealText,
  Review,
  Skills,
  TopScreen,
  Waves,
  Welcome,
} from "../components";

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = ({}) => {
  return (
    <>
      <div className="bggg"></div>


      <TopScreen />

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
