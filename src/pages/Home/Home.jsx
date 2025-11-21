import {Suspense} from "react";
import BookingForm from "../../shared/BookingForm";
import Faq from "../../shared/Faq";
import FeatureBanner from "./FeatureBanner";
import FeatureCards from "./FeatureCards";
import FeatureFleet from "./FeatureFleet";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Services from "./Services";
import Loading from "../../shared/Loading";
import WhyChooseUs from "./WhyChooseUs";

const fleetPromise = async () => {
  const res = await fetch("/fleet.json");
  return await res.json();
};
const Home = () => {
  const fleetData = fleetPromise();

  return (
    <div>
      <Hero />
      <BookingForm />
      <FeatureCards />
      <Services />
      <FeatureBanner />
      <WhyChooseUs />
      <Reviews />
      <Suspense fallback={Loading}>
        <FeatureFleet fleetData={fleetData} />
      </Suspense>
      <Faq />
    </div>
  );
};

export default Home;
