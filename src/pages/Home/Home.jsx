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
import {Helmet} from "react-helmet-async";
import Blogs from "../Blogs/Blogs";
import StatsSection from "./StatsSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Campbelltown Taxi Cabs - Home</title>
      </Helmet>
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
