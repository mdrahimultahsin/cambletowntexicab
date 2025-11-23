import {Suspense} from "react";
import BookingForm from "../../shared/BookingForm";
import Faq from "../../shared/Faq";
import FeatureBanner from "./FeatureBanner";
import FeatureCards from "./FeatureCards";
import FeatureFleet from "./FeatureFleet";
import Hero from "./Hero";
import Reviews from "./Reviews";
import WhyChooseUs from "./WhyChooseUs";
import ServicesSection from "./ServicesSection";


const Home = () => {

  return (
    <div>
      <Hero />
      <BookingForm />
      <FeatureCards />
      <ServicesSection />
      <FeatureBanner />
      <WhyChooseUs />
      <Reviews />
      
        <FeatureFleet />
    
      <Faq />
    </div>
  );
};

export default Home;
