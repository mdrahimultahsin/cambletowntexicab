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
import shuttleImg from "../../../assets/services/book-taxi-sydney-airport.png";
import BookingForm from "../../../shared/BookingForm";
const faqs = [
  {
    question: "How Does The Shared Airport Shuttle Sydney Pricing Work?",
    answer:
      "Shared airport shuttle Sydney fares start at $35 per person from Campbelltown. Pricing varies by pickup suburb distance. Private shuttle options available at fixed vehicle rates. Book online for instant fare calculation based on location.",
  },
  {
    question:
      "What Is The Difference Between Airport Shuttle Campbelltown And Private Taxi?",
    answer:
      "Airport shuttle Campbelltown operates on fixed schedules with multiple passengers sharing vehicles at lower per-person costs. Private taxis offer exclusive vehicles departing immediately at higher fares. Shuttles provide economical airport transfers for solo travelers.",
  },
  {
    question: "How Early Should I Book Sydney Airport Shuttle For My Flight?",
    answer:
      "Book a Sydney airport shuttle at least 48 hours before departure for guaranteed seats. Same-day bookings accepted subject to availability. Peak travel periods, including holidays, require 72-hour advance reservations. Online booking confirms availability instantly.",
  },
  {
    question:
      "Where Do Airport Shuttle Sydney Airport Vehicles Pick Up Passengers?",
    answer:
      "Pickup locations include Campbelltown Station, Macarthur Square, designated suburban stops, hotels, and residential addresses. You receive the exact pickup time and location via SMS 24 hours before departure. Drivers contact passengers 15 minutes prior.",
  },
  {
    question: "Can I Bring Luggage On Sydney Airport Shuttle Transfers?",
    answer:
      "Yes, each passenger receives two checked bags plus one carry-on. Oversized items like surfboards need advance notification. Excess luggage is accommodated, subject to space. No additional charges for standard baggage allowance.",
  },
  {
    question:
      "What Happens If My Flight Time Changes After Booking Airport Shuttle?",
    answer:
      " Contact us immediately for free schedule adjustments. Our flight monitoring system tracks departure changes automatically. We reschedule your airport shuttle Sydney Airport pickup, maintaining appropriate arrival timing. No fees apply for airline-initiated time changes.",
  },
  {
    question:
      "Does Airport Shuttle Campbelltown Operate During Public Holidays?",
    answer:
      "Yes, our airport shuttle Campbelltown runs 365 days annually, including Christmas, New Year, and Easter. Holiday services maintain identical hourly schedules. No surcharges apply during public holidays. Advanced booking is recommended for peak holiday travel periods.",
  },
  {
    question:
      "Can I Book an Airport Shuttle Sydney For the International Terminal T1?",
    answer:
      "Yes, we serve international T1 and domestic T2/T3 terminals. International departures receive earlier pickups for extended check-in. Meet-and-greet service available for arrivals with customs clearance assistance.",
  },
  {
    question:
      " Are Sydney Airport Shuttle Transfers Suitable For Business Travelers?",
    answer:
      "Yes, Sydney airport shuttle transfers provide WiFi connectivity, USB charging, and quiet environments for working during transit. Business travelers appreciate economical fares and reliable schedules. Corporate accounts are available with monthly invoicing for frequent flyers requiring regular transfers.",
  },
  {
    question: "How Do I Pay For Airport Shuttle Sydney Airport Bookings?",
    answer:
      "Accept online credit cards, debit cards, PayPal, Apple Pay, and Google Pay. Cash payments accepted onboard with exact change. Corporate accounts receive monthly invoices. Payment confirmation sent immediately via email.",
  },
];
const features = [
  "Affordable shared fares for all Campbelltown suburbs.",
  "Reliable timing, with over 96% of trips running on schedule.",
  "Priority airport access, getting you to the terminal faster.",
  "24/7 customer support for bookings and travel assistance.",
  "Loyalty perks to enjoy every 10th airport trip free.",
  "Group savings with 15% off for 5 or more passengers.",
  "Flexible cancellations with full refunds up to 6 hours prior.",
  "Discounted fares for students and seniors with valid ID.",
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
const AirportShuttle = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "Airport Shuttle Sydney, Campbelltown | Fast Sydney Transfers",
        description:
          "Families and groups choose airport shuttle campbelltown for spacious vehicles, friendly drivers and smooth trips to Sydney Airport. Book online today.",
        keywords:
          "Airport Shuttle Sydney,airport shuttle campbelltown,sydney airport shuttle,airport shuttle sydney airport,sydney airport shuttle transfers",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/airport-shuttle",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Exclusive Airport Shuttle Service Campbelltown
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cab operates dedicated airport shuttle Sydney
                services connecting Campbelltown suburbs to Sydney Airport
                terminals daily. Our airport shuttle Campbelltown fleet provides
                shared and private transfer options with guaranteed departure
                schedules. Every Sydney airport shuttle booking includes flight
                monitoring and terminal meet-and-greet service. Available for
                domestic T2/T3 and international T1 terminal transfers across
                NSW.
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
                  "Airport shuttle campbelltown providing shared or private transfers between Campbelltown addresses and Sydney Airport terminals every day."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Book Airport Shuttle Sydney Airport Transfers Instantly"}
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
                Reliable Airport Shuttle Transfers Across Campbelltown, Sydney
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cab pioneered scheduled airport shuttle Sydney
                Airport services with fixed hourly departure times. Our Sydney
                airport shuttle transfers accommodate individual travelers and
                group bookings simultaneously. Every passenger receives luggage
                assistance and priority boarding protocols. We maintain direct
                coordination with Qantas and Virgin Australia for seamless
                connections. Transparent per-person pricing available.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Scheduled hourly departures with fixed airport shuttle
                    Sydney timetables.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Accommodates individual and group Sydney airport shuttle
                    bookings.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    {" "}
                    Luggage assistance and priority boarding for all passengers.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Direct coordination with Qantas and Virgin Australia
                    airlines.
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={shuttleImg}
                alt={
                  "Airport shuttle campbelltown providing shared or private transfers between Campbelltown addresses and Sydney Airport terminals every day."
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
              Our Scheduled Departure System for Airport Shuttle Campbelltown
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Campbelltown Taxi Cab operates Sydney’s first fixed-schedule
              airport shuttle from Campbelltown, running hourly from 4 AM to 11
              PM every day. We offer convenient pickups from Campbelltown
              Station, Macarthur Square, major hotels, and selected suburban
              points. Our central dispatch team coordinates multi-passenger
              pickups to keep routes efficient. You receive real-time tracking
              and an SMS alert 15 minutes before your pickup. Every booking
              includes a guaranteed seat, so overbooking never happens. We’re
              also integrated with the Amadeus global distribution system,
              allowing travel agents worldwide to reserve seats directly.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Get The Best Travel Comfortably with Our Sydney Airport Shuttle
              Fleet
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Our Sydney Airport shuttle fleet is designed to give travellers a
              smooth, stress-free ride from the moment they step on board. We
              operate a mix of modern people movers and premium vans selected
              for spacious interiors, quiet cabins, and reliable performance in
              daily airport operations. Every shuttle offers generous seating
              layouts, dedicated luggage areas, and smooth suspension ideal for
              early-morning or late-night transfers. All vehicles are equipped
              with smart temperature control, overhead airflow vents, and soft
              interior lighting to create a relaxing environment during the
              journey. Passengers can stay connected with onboard WiFi and
              charging points, while families benefit from optional child
              seating. Mobility-assisted vehicles are available with advance
              notice, ensuring inclusive travel for all passengers. Safety
              remains central to our fleet, supported by modern driver-assist
              technology
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
                  for Sydney Airport Shuttle Service?
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
              Our Airport Shuttle Sydney Service Coverage Area
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              Our Sydney Airport shuttle service covers Campbelltown, Western
              Sydney, and nearby suburbs, offering reliable door-to-door
              transfers with fixed fares and fast pickup times.
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
              Need Airport Shuttle Sydney Airport Transfer Now?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Instant booking | Hourly departures | Shared and private options
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
        fleetSectionTitle={
          "Premium Fleet Supporting Smooth Sydney Airport Shuttles"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default AirportShuttle;
