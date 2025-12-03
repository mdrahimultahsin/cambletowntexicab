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
import taxiImg from "../../../assets/services/campbelltown-luxury-service.jpg";
import React from "react";
const BookingForm = React.lazy(() => import("../../../shared/BookingForm"));
const faqs = [
  {
    question: "How Quickly Can I Book A Taxi Sydney For Immediate Pickup?",
    answer:
      "Call 1300 450 428 for instant taxi Sydney dispatch. Our average response time is nine minutes across Campbelltown and the Sydney metropolitan areas. Online booking is also available for immediate requests, with SMS confirmation sent within two minutes of reservation.",
  },
  {
    question:
      "What Is The Difference Between A Regular Taxi In Sydney And A Silver Service Taxi In Sydney?",
    answer:
      "Silver service taxi Sydney provides premium vehicles with enhanced comfort features and experienced professional drivers. Standard taxi Sydney offers reliable transport at regulated metered rates. Both services maintain identical safety standards and punctuality guarantees across our Campbelltown fleet.",
  },
  {
    question: "Do Maxi Taxi Sydney Vehicles Cost More Than Regular Taxis?",
    answer:
      "Maxi taxi Sydney and maxi taxi cabs Sydney use the same regulated metered fare structure as standard taxis. You pay only for the distance traveled plus booking fees. No surcharges apply for larger vehicles accommodating groups up to eleven passengers comfortably.",
  },
  {
    question:
      " Can I Book A Taxi Campbelltown To Sydney Airport At Fixed Rates?",
    answer:
      "Yes, we offer fixed-rate taxi Sydney Airport transfers from all Campbelltown suburbs. Rates include tolls and meet-and-greet service at terminals. Book online or call for guaranteed pricing before your journey begins without fare surprises.",
  },
  {
    question: "What Payment Methods Does The Taxi Service In Sydney Accept?",
    answer:
      "We accept cash, all major credit cards, debit cards, Apple Pay, Google Pay, and Samsung Pay. Corporate accounts receive monthly invoicing with detailed trip reports. Payment occurs after journey completion unless an advance payment is requested for airport bookings.",
  },
  {
    question: "How Do I Find My Taxi Sydney Driver At Pickup Locations?",
    answer:
      "You receive an SMS with the driver's name, vehicle details, and registration. Track approach via mobile app in real-time. Drivers display Campbelltown Taxi Cabs signage and contact you upon arrival.",
  },
  {
    question:
      "Can Maxi Taxi Cabs In Sydney Accommodate Wheelchairs Or Mobility Equipment?",
    answer:
      "Standard maxi cabs don't have ramps. We offer dedicated wheelchair-accessible vehicles requiring 48-hour advance booking. These feature low-floor ramps and securement systems. Call to arrange specialized accessible transport.",
  },
  {
    question:
      "What Areas Does Taxi Campbelltown Service Cover Besides Local Suburbs?",
    answer:
      "Our taxi Campbelltown covers southwestern Sydney, the CBD, Eastern Suburbs, Northern Beaches, and Parramatta. Long-distance transfers reach Newcastle, Wollongong, and Canberra. Service extends throughout Greater Sydney and beyond.",
  },
  {
    question:
      " How Far In Advance Should I Book A Taxi In Sydney For Airport Transfers?",
    answer:
      "Book 24 hours ahead for guaranteed availability. Same-day bookings accepted up to one hour before pickup. Early morning flights benefit from advance booking, ensuring overnight driver assignment.",
  },
  {
    question:
      "Does The Taxi Service In Sydney Operate During Public Holidays And Late Nights?",
    answer:
      "Yes, our taxi service in Sydney operates 24/7, including Christmas, New Year, Easter, and Australia Day. No holiday surcharges. Late-night services maintain the same response times across Campbelltown continuously.",
  },
];
const features = [
  "Our smart dispatch system keeps wait times low, with most Sydney pickups arriving in about 9 minutes.",
  "We complete more than 15,000 monthly trips, giving you reliable taxi availability at any time.",
  "All fares follow Transport for NSW metered guidelines, so you always pay a fair, transparent rate.",
  "Over 180 Campbelltown businesses rely on our taxis for staff travel and corporate transport needs.",
  "In urgent situations, we dispatch a vehicle within 15 minutes to ensure fast and safe transport.",
  "You can pay easily using cash, card, digital wallets, or a corporate billing option.",
  "Your trip history is available anytime through your online customer dashboard.",
  "Our lost-item support team works hard to return belongings, reaching an 85% recovery rate.",
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
const TaxiSydneyService = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "Silver Service Taxi Sydney | Premium Cabs From Campbelltown",
        description:
          "Travel in comfort with silver service taxi sydney, with clean late-model cars, courteous drivers and quiet journeys from Campbelltown. Book online today.",
        keywords:
          "taxi campbelltown,silver service taxi sydney,maxi taxi sydney,maxi taxi cabs sydney,taxi service sydney,taxi sydney airport",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/taxi-sydney-service",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Premium Silver Service Taxi Sydney
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cab delivers premium taxi Sydney service
                across metropolitan regions with guaranteed punctuality. Our
                silver service taxi Sydney fleet serves business professionals
                and families throughout Campbelltown, Macarthur, and Sydney CBD.
                Every taxi service Sydney booking includes professional drivers
                and immaculate vehicles. Available 24/7 for airport transfers,
                corporate travel, and local transportation across NSW.
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
                  "Silver service taxi sydney premium rides from Campbelltown to city, airport and events with professional, well-presented drivers."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Book Taxi Sydney Service Online Instantly"}
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
                Exclusive Taxi Service Sydney Across Campbelltown and
                Metropolitan Areas
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cab operates NSW's largest diversified taxi
                fleet serving Sydney metropolitan region. Our maxi taxi Sydney
                vehicles accommodate groups of up to eleven passengers
                comfortably. Every taxi Campbelltown booking receives SMS
                confirmation with driver details. We maintain partnerships with
                Sydney Airport for priority terminal access. Fixed-rate pricing
                eliminates fare uncertainty.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    NSW's largest diversified taxi fleet serving metropolitan
                    Sydney.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Maxi taxi Sydney vehicles accommodating up to 11 passengers.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    SMS confirmation with driver details for every booking.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Sydney Airport partnership for priority terminal access.
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={taxiImg}
                alt={
                  "Silver service taxi sydney premium rides from Campbelltown to city, airport and events with professional, well-presented drivers."
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
              Our Professional Driver Standards for Sydney Taxi Service
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Our Campbelltown Taxi Cab team includes drivers who meet all NSW
              Point-to-Point Transport Commission licensing standards. Every
              driver completes at least 40 hours of defensive driving training
              through TAFE NSW-accredited programs. We run thorough background
              checks, including Australian Federal Police verification and full
              traffic history reviews. Our recruitment and support process helps
              us maintain a strong 92% driver retention rate across Campbelltown
              and Sydney. We also provide quarterly customer service training
              that aligns with the Australian Service Excellence Standards. Our
              drivers follow strict vehicle presentation guidelines.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Our Luxury Service Coverage & Journey Types
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Our taxi service in Campbelltown, Sydney, handles diverse journey
              requirements across metropolitan regions every day. We provide
              priority dispatch for medical appointments to Campbelltown
              Hospital and Liverpool Hospital facilities. Our school run
              services operate with experienced drivers holding Working With
              Children clearances. We assist elderly passengers with shopping
              transfers at Macarthur Square and Westfield Liverpool. Late-night
              pickups help patrons leaving restaurants and entertainment venues
              across Sydney CBD safely. Our corporate transfers connect business
              professionals to office locations and client meetings efficiently.
              We link Campbelltown Station passengers to suburbs without direct
              public transport access. Aged care visits help families reach
              residential homes across the Macarthur region regularly. Our
              pet-friendly taxis accommodate animals in carriers for veterinary
              appointments.
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
                  for Taxi Sydney Service?
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
              Our Taxi Sydney Service Coverage Area
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              We proudly serve Sydney, Campbelltown, and surrounding suburbs
              with reliable taxi and maxi cab services. Ensure fast, comfortable
              transport for daily travel, business trips, and airport transfers.
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
              Need a Taxi in Sydney Right Now?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Instant taxi service Sydney booking | 24/7 availability | Fixed
              transparent rates
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
          "Professional Silver Service Fleet for Reliable Sydney Travel"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default TaxiSydneyService;
