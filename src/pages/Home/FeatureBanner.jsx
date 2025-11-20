import React from "react";
import Container from "../../shared/Container";
import LottieImg from "../../components/LottieImg";
import {Link} from "react-router";
import Button from "../../shared/ButtonSecondary";
import ButtonPrimary from "../../shared/ButtonPrimary";
const FeatureBanner = () => {
  return (
    <div className="bg-[#6D7595] text-white py-20">
      <Container>
        <div className="flex items-center flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-4xl font-playfair font-bold">
              FAST MAXI: MAXI FOR SYDNEY AIRPORT
            </h2>
            <p className="mt-4 ">
              Fast Maxi offers the most reliable and efficient Maxi Cab Sydney
              Airport Taxi services. At Fast Maxi Cab Sydney, we take pride in
              providing a smooth airport transfer experience and ensuring that
              you reach Sydney Airport on time and depart without worry. Our
              commitment is to provide you with satisfaction, and every ride in
              our Maxi/Taxi to Sydney Airport aims to make our maxi/taxi sydney
              airport customers happy. We try everything possible to deliver the
              best Maxi Cab Sydney service in Sydney, all while keeping costs
              reasonable. For a secure and convenient travel experience, book a
              Maxi Cab near you anytime and let Fast Maxi take care of your
              transportation needs throughout Sydney.
            </p>
            <div className="mt-4">
              <Link to={`/`}>
                <ButtonPrimary>Book Now!</ButtonPrimary>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <LottieImg />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeatureBanner;
