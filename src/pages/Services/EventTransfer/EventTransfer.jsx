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
import eventImg from "../../../assets/services/campbelltown-events-transfers.jpg";
import React from "react";
const BookingForm = React.lazy(() => import("../../../shared/BookingForm"));
const faqs = [
  {
    question: "Do You Handle Early-Morning Or Late-Night Wedding Transfers?",
    answer:
      "Yes, we provide 24/7 support for wedding transfer Sydney bookings. Our team manages early bridal pickups and late-night reception returns with verified timing to keep your entire wedding schedule running smoothly.",
  },
  {
    question: "Can You Organise Multiple Vehicles For A Large Wedding Group?",
    answer:
      "Yes. We coordinate fleets for wedding transfers Campbelltown events, including bridal cars, family vehicles, and guest transport. Each driver follows scheduled route plans to maintain smooth and punctual travel throughout the day.",
  },
  {
    question:
      "Do You Cover Travel Between Ceremony, Photoshoot, And Reception Locations?",
    answer:
      "Absolutely. Our wedding transfers Sydney service manages multi-stop travel, following a structured timeline to support photographers, bridal parties, and families. Each stop is planned to keep the entire event running on schedule.",
  },
  {
    question: "Are Your Vehicles Suitable For Bridal Gowns And Formal Outfits?",
    answer:
      "Yes. Our cars offer gown-friendly seating, wide door access, and gentle handling. Every wedding transfer Sydney driver ensures comfortable entry and safe travel to protect delicate dresses and accessories.",
  },
  {
    question:
      "Can Guests Arriving At Sydney Airport Book Your Wedding Transfers?",
    answer:
      "Yes. We support airport pickups as part of our wedding transfers Campbelltown and Sydney service. We track flight timing, manage luggage needs, and ensure guests reach the venue comfortably and on time.",
  },
  {
    question: "Do You Offer Fixed Pricing For Wedding Travel?",
    answer:
      "Yes. Our wedding transfers Sydney include transparent, fixed-rate pricing with no weekend markups or event surcharges. All costs are confirmed before travel for complete peace of mind.",
  },
  {
    question: "How Early Should We Book Our Wedding Transfer Service?",
    answer:
      "We recommend booking at least two weeks ahead. Popular seasons fill quickly, especially for multi-vehicle wedding transfers Campbelltown bookings that require precise scheduling and fleet coordination.",
  },
  {
    question: "Do You Coordinate With Wedding Venues For Smoother Travel?",
    answer:
      "Yes. We review venue access rules, parking restrictions, and ceremony timing. This helps ensure each wedding transfer Sydney arrival is seamless, even at high-demand venues.",
  },
  {
    question:
      "Can You Accommodate Guests With Mobility Needs During Wedding Travel?",
    answer:
      "Yes. Our accessible vehicles support passengers who need extra assistance. Wedding transfers Sydney bookings can include mobility-friendly options to ensure every guest travels safely and comfortably.",
  },
  {
    question: "What If Our Ceremony Or Reception Runs Behind Schedule?",
    answer:
      "We adjust departure times when possible and monitor event delays closely. Our wedding transfers Campbelltown service offers flexible windows to keep your travel stress-free even when your day runs late.",
  },
];
const features = [
  "Drivers trained in venue-access and event-traffic control.",
  "Vehicles sized for groups and event equipment.",
  "Clear pricing with no surge fees on event days.",
  "24/7 support for late-night concerts and sports events.",
  "Trusted by local Sydney and Campbelltown venues.",
  "Structured dispatch for busy calendar days.",
  "Live route monitoring to avoid roadblocks, closures, and crowd-heavy zones.",
  "Coordinated multi-vehicle support for large groups attending major Sydney events.",
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
const EventTransfer = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "Event Transfers Campbelltown | Reliable Group Transport",
        description:
          "Make events easier with event transfers campbelltown, with punctual drivers, clean vehicles and smooth trips between local venues. Reserve your ride today.",
        keywords:
          "Event Transfers Sydney, event transfers campbelltown,wedding transfers sydney",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/event-transfer",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Fast and Easy Event Transfers Sydney
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs provides reliable event transfers Sydney
                and NSW travellers trust. Our team manages smooth travel to
                concerts, festivals, conferences, and stadium events. We
                coordinate routes, control timing, and support secure travel for
                groups across Campbelltown and Sydney. You will get the best
                ever event transfer services ever.
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
                  "Event transfers campbelltown maxi cabs and taxis for concerts, formals, events and parties across Sydney day and night."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Reserve Your Event Transfer Sydney Instantly"}
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
                Elite Event Transfer Solutions for Campbelltown, Sydney
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cabs delivers safe, organised event transport
                for concerts, festivals, conferences, and stadium days. We
                manage timing, access routes, and group coordination across
                Sydney and Campbelltown. You enjoy steady travel designed for
                busy event schedules.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Professional and event-trained drivers.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Clean, spacious, and modern vehicles.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Reliable timing for crowded venues.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Fixed and transparent event-day pricing.</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Available 24/7 for late-night returns.</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={eventImg}
                alt={
                  "Event transfers campbelltown maxi cabs and taxis for concerts, formals, events and parties across Sydney day and night."
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
              How Our Event Transfer Process Ensures Timely Arrivals
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Our event transfer team uses structured route checks and real-time
              traffic updates to maintain accurate pickup times across
              Campbelltown and Sydney. Drivers follow venue-access rules and
              manage coordinated arrivals. You receive planned travel designed
              for concerts, festivals, conferences, and major Sydney events. We
              adjust timings when crowd surges impact access routes. We follow
              designated pickup zones to prevent delays during busy event
              closures.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              We Manage Multi-Stop Event Travel Smoothly
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Campbelltown Taxi Cabs supports multi-stop event transfers
              Campbelltown travellers need for complex event days. We manage
              movement between homes, meeting points, dining locations, and
              event venues across Sydney. Our drivers follow mapped sequences
              using traffic forecasts, venue rules, and live updates. This keeps
              travel steady for groups attending concerts, sports events,
              exhibitions, and city festivals. We handle crowd-day congestion,
              drop-off zones, and equipment space when needed. Our coordinators
              monitor vehicle progress, keeping every transfer smooth from
              pickup to event entry. We adjust routing instantly when delays
              appear. We support tight schedules to keep groups aligned with
              event timings.
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
                  for Event Transfers Service
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
              Event Transfer Service Areas Across Campbelltown and Sydney
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              We support event transfers across Campbelltown, Greater Sydney,
              and NSW. Our coverage includes major venues, stadiums, arenas,
              theatres, parks, and festival grounds. We ensure safe, steady
              travel across key suburbs used for event-day transport.
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
              Need Event Transfers Right Now?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Instant booking | 24/7 availability | Fixed prices for event
              transfers Campbelltown
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
          "Spacious Event Transfer Fleet for Comfortable Group Travel"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default EventTransfer;
