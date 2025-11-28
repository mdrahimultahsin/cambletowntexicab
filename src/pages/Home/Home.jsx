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
import Blogs from "../Blogs/Blogs";
import StatsSection from "./StatsSection";
import usePageTitle from "../../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Home");
  return (
    <div>
      
      <Hero />
      <BookingForm />
      <FeatureCards />
      <ServicesSection />
      <FeatureBanner />
      <WhyChooseUs />
      <StatsSection/>
      <Reviews />

      <FeatureFleet />

      <Faq />

      <Blogs/>
    </div>
  );
};

export default Home;
