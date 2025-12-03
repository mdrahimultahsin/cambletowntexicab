import {Link, useLoaderData} from "react-router";
import Container from "../../shared/Container";
import {IoCallSharp, IoPeopleSharp} from "react-icons/io5";
import {GiConcreteBag} from "react-icons/gi";
import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import ButtonPrimary from "../../shared/ButtonPrimary";
import {FaHandPointer} from "react-icons/fa";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";

const OurFleet = () => {
  const fleetData = useLoaderData() || [];
  return (
    <section className="pb-30">
      {useSEO({
        title: "Campbelltown Transfer Fleet | Taxis & Maxi Cabs",
        description:
          "The campbelltown airport transfer fleet includes sedans, SUVs and maxi cabs with pro drivers for on-time Sydney Airport trips from Campbelltown. Call now.",
        keywords:
          "Sydney airport transfer fleet,campbelltown airport transfer fleet,Maxi cab fleet Sydney,Sydney taxi fleet services",
        canonical: "https://campbelltowntaxicabs.com.au/fleet",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="pt-10 pb-5 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Campbelltown Taxi Cabs Premium Fleet for Every Trip
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs offers a modern fleet designed for safe
                and comfortable travel across Sydney. Each vehicle is maintained
                with care to ensure a smooth ride every time you book with us.
                Whether you travel alone, with family, or in a group, we provide
                the right car to suit your trip.
              </p>
              <div className="flex py-4 gap-4 justify-center md:justify-start">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a href="tel:1300450428" className="">
                  <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                    <IoCallSharp className="" /> 1300 450 428
                  </ButtonSecondary>
                </a>
              </div>
            </div>
            <div className="flex flex-1 items-center pb-10 md:pb-0">
              <img
                className="w-full"
                src={titleImg}
                alt="Campbelltown airport transfer fleet of sedans, wagons, SUVs and maxi taxis transporting travellers to Sydney Airport daily."
              />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        {/* our fleet cards */}
        <div className="mt-20">
          <h2 className="section-title">Our Luxury Campbelltown Taxi Fleet</h2>
        </div>
        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {fleetData.map((singleData) => (
            <div
              key={singleData.id}
              className="bg-light pb-7 p-4 md:p-8 rounded-xl shadow-lg"
            >
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
              <img
                className="mt-4"
                src={singleData.image}
                alt={singleData.name + "Campbelltown Taxi Cabs"}
              />
              <div className="w-full text-center md:text-left">
                <Link to={`/book-a-taxi`}>
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
