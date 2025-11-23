import React from "react";
import BookingForm from "../../shared/BookingForm";
import titleImg from "../../assets/fleet-header-img.png";
import Container from "../../shared/Container";
import {Link, useParams} from "react-router";
import ButtonSecondary from "../../shared/ButtonSecondary";
import {FaHandPointer} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";
import FeatureFleet from "../Home/FeatureFleet";
import Faq from "../../shared/Faq";
const Services = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold capitalize py-3 px-8 bg-black/50 text-white rounded-xl font-playfair">
                {params.servicetype.split("-").join(" ")}
              </span>
              <p className="mt-8 text-sm md:text-base">
                At CampbellTown Taxi Cabs, we take pride in offering a diverse
                and modern fleet to cater to all your transportation needs in
                Sydney. Our vehicles are meticulously maintained, ensuring a
                safe, comfortable, and reliable ride every time you travel with
                us. Whether you’re traveling solo, with family, or a larger
                group, we have the perfect vehicle to suit your requirements.
              </p>
              <div className="flex py-4 gap-4 justify-center md:justify-start">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a href="tel:+1300450428" className="">
                  <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                    <IoCallSharp className="" /> +1300 450 428
                  </ButtonSecondary>
                </a>
              </div>
            </div>
            <div className="flex flex-1 items-center pb-10 md:pb-0">
              <img src={titleImg} alt="" />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        params={params.servicetype.split("-").join(" ")}
        className="mt-10!"
      />

      <FeatureFleet />
      <Faq />
    </div>
  );
};

export default Services;
