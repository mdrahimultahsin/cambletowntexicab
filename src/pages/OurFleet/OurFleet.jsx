import React from "react";
import { Link, useLoaderData } from "react-router";
import Container from "../../shared/Container";
import { IoPeopleSharp } from "react-icons/io5";
import { GiConcreteBag } from "react-icons/gi";
import Button from "../../shared/Button";
import titleImg from "../../assets/fleet-header-img.png";

const OurFleet = () => {
  const fleetData = useLoaderData() || [];

  return (
    <div className="pb-30">
      <div className="bg-gradient-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-15 md:py-30 flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl">
                Fleet
              </span>
              <p className="mt-8 text-sm md:text-md">
                At Sky Maxi Cabs, we take pride in offering a diverse and modern
                fleet to cater to all your transportation needs in Sydney. Our
                vehicles are meticulously maintained, ensuring a safe,
                comfortable, and reliable ride every time you travel with us.
                Whether you’re traveling solo, with family, or a larger group,
                we have the perfect vehicle to suit your requirements.
              </p>
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
          <h2 className="font-playfair text-primary font-semibold text-5xl text-center my-20 ">
            Our Fleet
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {fleetData.map((singleData) => (
            <div key={singleData.id} className="bg-light p-4 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-semibold mb-10">
                {singleData.name}
              </h3>
              <div className="flex gap-3 text-primary text-2xl mb-4">
                <IoPeopleSharp />
                <p>{singleData.passengerCapacity} Passengers</p>
              </div>
              <div className="flex gap-3 text-primary text-2xl mb-8">
                <GiConcreteBag />
                <p>{singleData.bagsCapacity} Bags</p>
              </div>
              <p className="text-accent">{singleData.description}</p>
              <img src={singleData.image} alt="" />
              <Link to={`/fleet/${singleData.id}`}>
                <Button className="text-xl bg-primary! hover:bg-secondary! py-4 px-8">
                  Book Now
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurFleet;
