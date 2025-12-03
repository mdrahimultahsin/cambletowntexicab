import titleImg from "../../assets/campbelltown-cabcharge-hero-img.png";
import Container from "../../shared/Container";
import ButtonSecondary from "../../shared/ButtonSecondary";
import {IoCallSharp, IoCarSport} from "react-icons/io5";
import {Link, useNavigate} from "react-router";
import {FaHandPointer} from "react-icons/fa6";
import {FaPhoneAlt} from "react-icons/fa";
import cabChargePayImg from "../../assets/cabcharge-taxi-service-campbelltown.png";
import cabChargePayImg2 from "../../assets/cabcharge-taxi-service-img2-campbelltown.png";
import FeatureFleet from "../Home/FeatureFleet";
import CabChargeFaq from "./CabChargeFaq";
import useSEO from "../../hooks/useSEO";

const CabChargeTaxi = () => {
  const navigate = useNavigate();
  return (
    <>
    {useSEO({
        title: "CabCharge Taxi Service - Campbelltown Taxi Cabs",
        description:
          "CabCharge Taxi Service in Campbelltown offers reliable, convenient, and affordable taxi rides with easy payment options for a seamless travel experience.",
        keywords: "Cabcharge taxi Campbelltown",
        canonical: "https://campbelltowntaxicabs.com.au/cabcharge-taxi",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-15 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                CabCharge Taxi Campbelltown
              </h2>

              <p className="mt-8 text-sm md:text-base">
                The Cabcharge Taxi Service by Campbelltown Taxi Cabs offers a
                reliable and hassle-free travel experience. Passengers can enjoy
                convenient Cabcharge payment options, professional drivers,
                clean vehicles, and timely pickups, making every journey
                comfortable, secure, and suitable for both personal and business
                travel needs.
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
                alt="Campbelltown Taxi Cabs"
              />
            </div>
          </div>
        </Container>
      </div>
      <section className="py-16 bg-light">
        <Container>
          {/* Section 1: Content Left, Image Right */}
          <h2 className="section-title">
            CabCharge Payments - Secure And Hassle-Free
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg max-w-5xl text-center mx-auto leading-relaxed">
            At <strong>Campbelltown Taxi Cabs</strong>, we proudly accept{" "}
            <strong>CabCharge</strong>, giving passengers a fast, secure, and
            convenient way to pay for their ride—whether you're travelling for
            business, appointments, airport transfers, or local trips.
          </p>
          <div className="mt-10 flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
            {/* Left Column: Content */}
            <div className="flex-1 space-y-4 text-accent">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                What is CabCharge?
              </h3>

              <p>
                CabCharge is one of Australia's most trusted transportation
                payment systems, built to make every trip smooth, secure, and
                cash-free. What began as Australia's most recognised in-taxi
                payment method has evolved into a transparent, cloud-based
                travel management platform designed to support modern mobility
                needs.
              </p>

              <p>
                At <strong>Campbelltown Taxi Cabs</strong>, we proudly integrate
                CabCharge into our <strong>Cabcharge Taxi Service</strong>,
                giving passengers a fast and convenient way to pay for business
                travel, medical appointments, airport transfers, and everyday
                rides. With both digital solutions and physical CabCharge cards,
                customers enjoy seamless payments without needing cash or
                personal credit cards.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="flex-1">
              <img
                src={cabChargePayImg}
                alt="CabCharge Payment Campbelltown Taxi Cabs"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Section 2: Image Left, Content Right */}
          <div className="mt-30 flex flex-col-reverse md:flex-row items-center gap-10">
            {/* Left Column: Image */}
            <div className="md:flex-1">
              <img
                src={cabChargePayImg2}
                alt="CabCharge Benefits Campbelltown Taxi Cabs"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Right Column: Content */}
            <div className="md:flex-1 space-y-4 text-accent">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                Why CabCharge is Perfect for Your Ride
              </h2>

              <p>
                Choosing CabCharge with <strong>Campbelltown Taxi Cabs</strong>{" "}
                means enjoying a fast, secure, and flexible payment experience
                designed for both everyday passengers and business travellers.
                As part of our reliable
                <strong> Cabcharge Taxi Service</strong>, we ensure every ride
                is convenient and stress-free from booking to payment.
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  Customers can pay by <b>Cabcharge Card</b>, paper card,
                  digital card.
                </li>
                <li>Widely accepted across Australia, including Sydney</li>
                <li>Fast and secure electronic transactions</li>
                <li>Perfect for business, corporate, and government travel</li>
                <li>No need to carry cash or personal credit cards</li>
                <li>
                  Detailed trip summaries for easy billing and expense
                  management
                </li>
              </ul>

              <p className="mt-2">
                Whether you're heading to work, the airport, an appointment, or
                a local destination, CabCharge offers a smooth and reliable
                payment solution. Along with CabCharge,
                <strong>Campbelltown Taxi Cabs</strong> accepts debit/credit
                cards, tap-and-go, and cash payments—giving you the flexibility
                and comfort you deserve.
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* Faq */}
      <CabChargeFaq />

      {/* Feature Fleet */}
      <FeatureFleet />

      <section className="mt-20">
        <Container>
          {/* Call to action */}
          <div className="text-center">
            <div className="bg-linear-to-r from-primary to-[#003E60] text-white rounded-xl p-3 md:p-6 shadow-md">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                Need a Ride Right Now?
              </h3>
              <p className="text-sm md:text-lg mb-6 md:font-semibold">
                Instant booking | 24/7 availability | No Hidden Fees
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-secondary text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-xs md:text-base">
                  <a
                    className="flex items-center gap-2 cursor-pointer"
                    href="tel:1300450428"
                  >
                    <FaPhoneAlt className="text-sm md:text-lg" />
                    Call: 1300 123 456
                  </a>
                </button>
                <button
                  onClick={() => navigate("/book-a-taxi")}
                  className="border-2 border-white text-white px-3 md:px-8 py-1 md:py-3 text-sm md:text-base rounded-full font-semibold hover:bg-secondary/80 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <IoCarSport className="text-sm md:text-lg" />
                  Book Online Now
                </button>
              </div>
              <p className="text-sm mt-4 text-white">
                Average wait time: 8 minutes • Transparent Pricing
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CabChargeTaxi;
