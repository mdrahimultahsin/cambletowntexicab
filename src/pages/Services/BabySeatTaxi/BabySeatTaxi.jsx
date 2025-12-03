import titleImg from "../../../assets/services/campbelltown-service-hero-img.png";
import Container from "../../../shared/Container";
import {Link, useNavigate} from "react-router";
import ButtonSecondary from "../../../shared/ButtonSecondary";
import {
  FaCheck,
  FaCheckCircle,
  FaHandPointer,
  FaPhoneAlt,
} from "react-icons/fa";
import {IoCallSharp, IoCarSport} from "react-icons/io5";
import FeatureFleet from "../../Home/FeatureFleet";
import Faq from "../../../shared/Faq";
import serviceBgImage from "../../../assets/serviceBg.jpg";
import {FaLocationDot} from "react-icons/fa6";
import useSEO from "../../../hooks/useSEO";
import babySeatImg from "../../../assets/services/campbelltown-baby-seat.jpg";
import React from "react";
const BookingForm = React.lazy(() => import("../../../shared/BookingForm"));
const faqs = [
  {
    question:
      "Do You Provide Different Baby Seat Types For Infants And Toddlers?",
    answer:
      "Yes, we offer infant, toddler, and booster seats based on your child’s age and weight. Each seat is certified and fitted before pickup, ensuring safe travel for all Sydney and Campbelltown families.",
  },
  {
    question: "Can I Book A Baby Taxi Sydney Airport In Advance?",
    answer:
      "Yes, you can pre-book a baby taxi Sydney Airport at any time. Early booking helps us prepare the correct seat type and assign a trained driver who understands safe child seating and airport timing.",
  },
  {
    question: "How Early Should I Book A Taxi With Baby Seat Sydney Airport?",
    answer:
      "We recommend booking at least a few hours before travel. This gives our team enough time to prepare a taxi with a baby seat Sydney Airport that matches your child’s exact seat and comfort needs.",
  },
  {
    question: "Do Your Drivers Know How To Install Baby Seats Correctly?",
    answer:
      "Yes, our drivers complete regular training on correct baby seat installation. They follow strict NSW guidelines for fit, belt tension, and harness placement to ensure your child stays secure throughout the trip.",
  },
  {
    question: "Can You Handle Airport Pickups With Family Luggage And Prams?",
    answer:
      "Yes, we choose the right vehicle based on your luggage and pram size. Whether it’s a sedan or maxi, we ensure enough space for a calm and organised airport experience for your entire family.",
  },
  {
    question: "Do You Provide Baby Seat Options For Long-Distance Travel?",
    answer:
      "Yes, we support long-distance trips with certified seats and steady driving. We plan smooth routes to keep your child comfortable, whether you’re heading to Sydney attractions or returning home to Campbelltown.",
  },
  {
    question: "Can I Request Multiple Child Seats In One Booking?",
    answer:
      "Yes, you can request up to four seats depending on the vehicle. Just share your children’s ages, heights, and seat needs so we can prepare the correct setup before your trip begins.",
  },
  {
    question:
      "Do You Offer Baby Taxi Campbelltown Airport Services Late At Night?",
    answer:
      "Yes, our baby taxi Campbelltown Airport service runs 24/7. Families get safe and reliable airport transfers at any hour, supported by trained drivers who handle child seating and night travel carefully.",
  },
  {
    question:
      "Is There An Extra Fee For Choosing A Sydney Airport Taxi With a Baby Seat?",
    answer:
      "No, we do not charge hidden fees for a Sydney Airport taxi with a baby seat. You receive clear pricing with no surges, giving families predictable and fair rates for every trip.",
  },
  {
    question: "How Do You Keep Baby Seats Clean And Safe After Each Ride?",
    answer:
      "We sanitise and inspect every seat after each booking. Our team checks labels, anchors, straps, and padding to ensure your next ride remains safe, hygienic, and comfortable for your child.",
  },
];
const features = [
  "Dedicated fleet built for family travel across Campbelltown and Sydney.",
  "Drivers trained to handle child seating needs during busy Sydney routes.",
  "Real-time route planning to avoid harsh roads and sudden stops.",
  "Four vehicle types to match seat needs, luggage, and pram size.",
  "Backup baby seats prepared for unexpected swaps or adjustments.",
  "Cabins kept allergen-safe for sensitive infants and toddlers.",
  "Direct support for late-night or early-morning family airport trips.",
  "Luggage assistance while securing children safely.",
];
const serviceAreas = [
  "Campbelltown",
  "Ambarvale",
  "Appin",
  "Currans Hills",
  "Claymore",
  "Macarthur",
  "Menangle Park",
  "Leumeah",
  "Raby",
  "St Andrew's",
  "St Helen's park",
  "Ruse",
  "Minto",
  "Ingleburn",
  "Glenfield",
  "Camden",
  "Camden south",
  "Oran park",
  "Gregory hills",
  "Eagle vale",
  "Douglas Park",
  "Elderslie",
  "Wilton",
  "Spring farm",
  "Cobbity",
  "Mount Annan",
  "Phesant Nest",
  "Cowdor",
  "Denham court",
  "Edmondson park",
  "Austral",
  "Razorback",
  "Liverpool",
  "Picton",
  "Thilmere",
  "Bargo",
  "Bowral",
  "Kearns",
  "Goulburn",
  "Rosemeadow",
  "Airds",
  "Gledswood Hills",
  "Leppington",
  "Smeaton Grange",
];
const BabySeatTaxi = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "Baby Taxi Sydney Airport | Safe Family Airport Transfers",
        description:
          "Choose campbelltown airport taxi for on-time Sydney Airport transfers, fixed-price fares, luggage help and 24/7 pickups from Campbelltown.",
        keywords:
          "baby taxi sydney airport, baby taxi campbelltown airport,taxi with baby seat sydney airport,sydney airport taxi with baby seat",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/baby-seat-taxi-sydney",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Safe Baby Taxi Sydney Airport Service
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs offers a safe and reliable baby taxi
                Sydney Airport service for families in Campbelltown, NSW. Our
                vehicles include certified baby and booster seats, clean
                interiors, and trained drivers who handle every trip with care.
                Enjoy secure, on-time airport travel with comfort and trust.
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
                alt={
                  "Baby taxi sydney airport rides with child seats, careful drivers and family transfers from Campbelltown to terminals."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Easy Booking for Baby Seat Taxi Sydney"}
        className="mt-10!"
      />

      {/* ---------------------------------------- */}
      {/* SECTION: Service Details Dynamic */}
      {/* ---------------------------------------- */}

      <section className="py-12 bg-white">
        <Container>
          <div className="flex flex-col-reverse md:flex-row gap-5 items-center">
            {/* LEFT SIDE — Content */}
            <div className="flex-1">
              {/* Title */}
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-4 capitalize">
                Premium Family Taxi Service With Baby Seats in Sydney
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cabs provides a safe and reliable baby seat
                taxi service across Sydney. We use certified child seats
                approved under NSW standards for infants and toddlers. Our
                trained drivers follow strict safety steps on every ride. You
                enjoy smooth and calm travel while we protect your child at each
                moment.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Trained drivers who install seats with care.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Clean cabins with certified baby and booster seats.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Fast pickups across Campbelltown, Sydney.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Fair and transparent fares for every family.</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={babySeatImg}
                alt={
                  "Baby taxi sydney airport rides with child seats, careful drivers and family transfers from Campbelltown to terminals."
                }
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Safe & Travel */}
      <section className="mt-10 bg-light py-10">
        <Container>
          <div>
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Premium Baby Seat Taxi Service in Sydney With Expert Child-Care
              Trained Drivers
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Campbelltown Taxi Cabs delivers a premium baby seat taxi service
              backed by trained child-care drivers. Each driver understands
              infant needs and follows safe handling steps on every ride.
              Families booking a taxi with a baby seat at Sydney Airport trust
              our clear safety checks. We inspect seat labels, fit points, and
              harness strength before travel. Your child stays safe and calm on
              every Sydney trip.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Campbelltown’s Trusted Baby Seat Taxi Service With Skilled
              Child-Care Drivers
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Campbelltown Taxi Cabs offers a trusted baby seat taxi service
              built around personalised seat setups for every age group. We
              prepare the right seat type before arrival, based on your child’s
              weight and height. Seats sanitized with child-safe, non-toxic
              cleaning products after each use. Our team keeps a detailed
              checklist for each booking, covering fit, belt tension, and cabin
              comfort. Many families choose our Sydney Airport taxi with a baby
              seat option for safe airport travel. We install infant, toddler,
              and booster seats with precise alignment to keep your child
              supported. With the precise siblings' sitting arrangement, you can
              easily minimize disputes during travel. Our drivers strictly
              follow NSW seat rules and complete frequent safety refreshers. You
              get a well-prepared taxi that suits your schedule and your child’s
              needs.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION: Why Choose Us */}
      <section className="relative py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{backgroundImage: `url(${serviceBgImage})`}}
        ></div>

        {/* Overlay with primary color */}
        <div className="absolute inset-0 bg-primary/80"></div>

        {/* Content with zigzag clip-path */}
        <div
          className="relative "
          style={{clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)"}}
        >
          <Container>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT COLUMN */}
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
                  Why Choose
                  <span className="text-secondary">
                    Campbelltown Taxi Cab
                  </span>{" "}
                  for Baby Seat Travel in Sydney?
                </h2>
                <ul className="space-y-3 text-lg">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 text-white" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex justify-center">
                <img
                  src={titleImg}
                  alt="Campbelltown Taxi Cab"
                  className=" w-full max-w-lg"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* SECTION: Coverage Area */}

      <section className="py-16 bg-linear-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <Container>
          <div className="text-center mb-8">
            <h2 className="section-title">
              Our Baby Taxi Campbelltown Airport Service Areas Across Sydney
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              Campbelltown Taxi Cabs covers Campbelltown. Sydney, with routes
              planned for smooth family travel. We know the safest roads and
              quickest paths. You and your child enjoy a steady and secure ride
              every time.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((serviceArea, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row text-center md:text-left items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group cursor-pointer"
                >
                  <FaLocationDot size={20} className="text-primary" />
                  <span className="text-gray-700 font-medium group-hover:text-primary transition-colors duration-300">
                    {serviceArea}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center border-b md:border-b-0 py-4 border-border-color border-r md:border-r-2 ">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Service</div>
              </div>
              <div className="text-center border-b py-4 border-border-color md:border-b-0 md:border-r-2">
                <div className="text-2xl font-bold text-primary">Quick</div>
                <div className="text-sm text-gray-600">Response</div>
              </div>
              <div className="text-center py-4 border-r md:border-r-2 border-border-color">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Areas</div>
              </div>
              <div className="text-center py-4">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Reliable</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="mt-30 text-center">
        <Container>
          <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-xl p-3 md:p-6 shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              Need a Baby Seat Taxi Campbelltown Right Now?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Fast booking for baby taxi Sydney Airport services and
              Campbelltown Airport trips. No surge pricing and quick response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-secondary text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-xs md:text-base">
                <FaPhoneAlt className="text-sm md:text-lg" />
                Call: 1300 123 456
              </button>
              <button
                onClick={() => navigate("/book-a-taxi")}
                className="border-2 border-white text-white px-3 md:px-8 py-1 md:py-3 text-sm md:text-base rounded-full font-semibold hover:bg-secondary/80 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <IoCarSport className="text-sm md:text-lg" />
                Book Online Now
              </button>
            </div>
            <p className="text-sm mt-4 text-white">
              Average wait time: 8 minutes • Transparent Pricing
            </p>
          </div>
        </Container>
      </section>

      <FeatureFleet
        fleetSectionTitle={"Baby-Seat Equipped Fleet for Smooth Airport Travel"}
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default BabySeatTaxi;
