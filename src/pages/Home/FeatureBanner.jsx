import React from "react";
import Container from "../../shared/Container";
import LottieImg from "../../components/LottieImg";
import {Link} from "react-router";
import Button from "../../shared/ButtonSecondary";
import ButtonPrimary from "../../shared/ButtonPrimary";
const FeatureBanner = () => {
  return (
    <section className="bg-[#6D7595] text-white py-20">
      <Container>
        <div className="flex items-center flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-playfair font-bold">
              Reliable and Stress-Free Sydney Airport Transfers with
              Campbelltown Taxi Cabs
            </h2>
            <p className="mt-4 ">
              When it comes to airport transfers, Campbelltown Taxi Cabs is your
              trusted partner for a smooth, on-time ride. Whether you're
              catching an early flight or returning after a long journey, our
              airport Taxi and Maxi service in Sydney ensures your airport
              experience is hassle-free. Our professional drivers monitor flight
              schedules and will be there waiting for you, so you never have to
              worry about a delay. We offer luxury and comfort at an affordable
              price, ensuring your journey is both premium and economical. No
              matter where you're coming from, you can count on us to get you to
              Sydney Airport on time, in comfort, and with peace of mind.
            </p>
            <div className="mt-4">
              <Link to={`/book-a-text`}>
                <ButtonPrimary>Book Now!</ButtonPrimary>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <LottieImg />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeatureBanner;
