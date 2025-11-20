import Faq from "../../shared/Faq";
import FeatureBanner from "./FeatureBanner";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <FeatureBanner />
      <Faq />
      <Reviews />
    </div>
  );
};

export default Home;
