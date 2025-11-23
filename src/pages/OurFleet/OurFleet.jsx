import React from "react";
import { Link, useLoaderData } from "react-router";
import Container from "../../shared/Container";
import { IoCallSharp, IoPeopleSharp } from "react-icons/io5";
import { GiConcreteBag } from "react-icons/gi";
import titleImg from "../../assets/fleet-header-img.png";
import ButtonPrimary from "../../shared/ButtonPrimary";
import { FaHandPointer } from "react-icons/fa";
import ButtonSecondary from "../../shared/ButtonSecondary";

const OurFleet = () => {
  const fleetData = useLoaderData() || [];

  return (
    <section className="pb-30">
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl">
                Fleet
              </span>
              <p className="mt-8 text-sm md:text-base">
                At Sky Maxi Cabs, we take pride in offering a diverse and modern
                fleet to cater to all your transportation needs in Sydney. Our
                vehicles are meticulously maintained, ensuring a safe,
                comfortable, and reliable ride every time you travel with us.
                Whether you’re traveling solo, with family, or a larger group,
                we have the perfect vehicle to suit your requirements.
              </p>
              <div className="flex py-4 gap-4 justify-center md:justify-start">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a
                  href="tel:+1300450428"
                  className=""
                >
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
      <Container>
        {/* our fleet cards */}
        <div>
          <h2 className="font-playfair text-primary font-semibold text-4xl md:text-5xl text-center mt-8 md:mt-10 ">
            Our Fleet
          </h2>
        </div>
        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {fleetData.map((singleData) => (
            <div key={singleData.id} className="bg-light p-4 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-10">
                {singleData.name}
              </h3>
              <div className="flex gap-3 text-primary text-xl md:text-2xl mb-1 md:mb-4">
                <IoPeopleSharp />
                <p>{singleData.passengerCapacity} Passengers</p>
              </div>
              <div className="flex gap-3 text-primary text-xl md:text-2xl mb-1 md:mb-8">
                <GiConcreteBag />
                <p>{singleData.bagsCapacity} Bags</p>
              </div>
              <p className="text-accent">{singleData.description}</p>
              <img src={singleData.image} alt="" />
              <div className="w-full text-center md:text-left">
                <Link to={`/fleet/${singleData.id}`}>
                <ButtonPrimary className="text-base md:text-xl py-2 md:py-4 px-5 md:px-8">
                  Book {singleData.name}
                </ButtonPrimary>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurFleet;
