import React from "react";
import Container from "./Container";
import ButtonPrimary from "./ButtonPrimary";
import {Link} from "react-router";

const CallToAction = () => {
  return (
    <div className="bg-[url('/src/assets/ctabg.jpg')] w-full  bg-no-repeat bg-cover bg-fixed bg-bottom text-white py-10">
      <Container>
        <div className="flex items-center justify-center gap-4  md:gap-15">
          <p className="font-playfair font-semibold text-base md:text-lg lg:text-2xl">
            We provide Fast Maxi Cabs Sydney bookings for more than 50+ Suburbs.
          </p>
          <Link to="/services">
            <ButtonPrimary className={`px-2! text-sm`}>Online Booking</ButtonPrimary>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
