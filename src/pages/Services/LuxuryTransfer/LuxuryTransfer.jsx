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
import luxuryImg from "../../../assets/services/campbelltown-luxury-service.jpg";
import React from "react";
const BookingForm = React.lazy(() => import("../../../shared/BookingForm"));
const faqs = [
  {
    question:
      "What Makes Luxury Transfers Sydney Different From Regular Taxi Services?",
    answer:
      "Luxury transfers Sydney feature executive vehicles, formally attired chauffeurs, and white-glove service standards. We provide complimentary amenities, red carpet treatment, and guaranteed vehicle exclusivity. Regular taxis offer basic transportation without premium service enhancements.",
  },
  {
    question:
      "How Much Does A Luxury Airport Transfer Sydney Cost From Campbelltown?",
    answer:
      "Rates start at $180 from Campbelltown to Sydney Airport, including amenities, gratuity, and tolls. Pricing varies by vehicle selection and service requests. Contact us for personalized quotes matching requirements.",
  },
  {
    question:
      "Can I Request Specific Vehicle Types For Luxury Transfer Bookings?",
    answer:
      "Yes, you can request a specific vehicle type for your luxury transfer. Our fleet includes premium sedans and high-comfort vehicles suitable for corporate and VIP travel. Simply mention your preference during booking, and we’ll allocate the most suitable luxury vehicle available. Booking early helps secure your preferred option.",
  },
  {
    question: "Do Luxury Transfers Sydney Include Amenities Like Refreshments?",
    answer:
      "Yes, all luxury transfers Sydney include complimentary premium bottled water, mints, and current magazines. Champagne service is available for international arrivals. Special dietary refreshments are accommodated upon advance request. Fresh floral arrangements are provided for special occasions.",
  },
  {
    question:
      "How Far In Advance Should I Book A Luxury Airport Transfer Sydney?",
    answer:
      "We recommend booking a luxury airport transfer Sydney minimum 72 hours before departure for vehicle guarantee. Same-day bookings accepted subject to availability. Corporate accounts receive priority allocation. Peak periods require one-week advance reservations.",
  },
  {
    question:
      "Are Chauffeurs Trained For Corporate Executive Transport Protocols?",
    answer:
      "Yes, our chauffeurs complete corporate etiquette training and confidentiality agreements. They understand discretion requirements for high-profile passengers. Communication training emphasizes professional boundaries, respecting privacy. Background checks include employment verification and reference validation processes.",
  },
  {
    question:
      "Can Luxury Transfer Services Accommodate Special Event Requirements?",
    answer:
      "Absolutely. We coordinate with wedding planners, event coordinators, and personal assistants. Services include red carpet arrivals, photography assistance, and timing synchronization. Gift delivery and restaurant confirmations arranged. Customized itineraries created for anniversary celebrations.",
  },
  {
    question:
      "What Payment Methods Do You Accept For Luxury Transfers In Sydney?",
    answer:
      "We accept premium credit cards, bank transfers, and corporate invoicing. Platinum members receive monthly consolidated billing. Payment authorization occurs before service commencement. Gratuities are included in the quoted rates, eliminating additional tipping requirements.",
  },
  {
    question:
      "Do You Provide Luxury Transfer Services For Multi-Day Corporate Events?",
    answer:
      "Yes, we arrange dedicated vehicles for multi-day conferences, roadshows, and business delegations. Daily rates are available with assigned chauffeurs throughout the event duration. Coordination includes multiple pickup locations and schedule adjustments. Volume discounts apply.",
  },
  {
    question:
      "Are Bilingual Chauffeurs Available For International Business Visitors?",
    answer:
      "Yes, bilingual chauffeurs are available in Mandarin, Japanese, French, and Arabic languages. Request language preferences during booking for guaranteed assignment. Cultural awareness training ensures appropriate service etiquette. Ideal for hosting international corporate delegations comfortably.",
  },
];
const features = [
  "Partnerships with Swissotel, Sofitel, and InterContinental Hotels Sydney.",
  "Champagne Service for International Luxury Airport Transfer Sydney Arrivals.",
  "Guaranteed vehicle exclusivity – zero shared rides ever.",
  "International Chauffeur Alliance Membership for global standards.",
  "Platinum clients receive dedicated personal account managers.",
  "Complimentary 30-minute wait time for all premium bookings.",
  "Vehicle selection options: request specific make and model.",
  "Bilingual expert chauffeurs for ultimate convenient. ",
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
const LuxuryTransfer = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title:
          "Luxury Transfers Sydney - Private Rides  | Campbelltown Taxi Cabs",
        description:
          "Arrive in style with luxury transfers sydney for airport, hotel and event trips, with pro drivers, clean cars and fixed fares from Campbelltown. Book now.",
        keywords: "Luxury Transfers Sydney, luxury airport transfer sydney",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/luxury-transfer",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Luxury Transfers Sydney for Private Rides Campbelltown
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cab delivers exclusive luxury transfers Sydney
                for discerning clients requiring premium transportation. Our
                elite fleet provides sophisticated travel experiences for
                corporate executives, VIP guests, and special occasions. Every
                luxury airport transfer Sydney includes complimentary amenities
                and professional chauffeur service. We serve high-profile
                events, weddings, and business engagements across NSW
                metropolitan regions.
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
                  "Luxury transfers sydney private car service from Campbelltown for corporate travel, airport pickups, hotels and special evening events."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Book Premium Luxury Transfer Service Instantly"}
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
                Exclusive Luxury Transfers Sydney Across Campbelltown, Sydney
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cab pioneered luxury transfers Sydney with
                white-glove service standards exceeding five-star hotel
                expectations. Our chauffeurs wear formal attire and maintain
                impeccable presentation protocols. Every booking includes
                complimentary bottled water, magazines, and climate-controlled
                comfort. We coordinate seamlessly with event planners and
                personal assistants for flawless execution.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    White-glove service standards exceeding five-star hotel
                    expectations.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Formally attired chauffeurs with impeccable presentation
                    protocols.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Complimentary bottled water, magazines, and
                    climate-controlled comfort.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Seamless coordination with event planners and personal
                    assistants.
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={luxuryImg}
                alt={
                  "Luxury transfers sydney private car service from Campbelltown for corporate travel, airport pickups, hotels and special evening events."
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
              Our Booking & Personalization Process for Luxury Transfer
              Excellence
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Campbelltown Taxi Cab provides personalized luxury transfer
              consultations, understanding your preferences before every
              journey. Our reservation specialists gather detailed requirements,
              including beverage selections, temperature preferences, and music
              choices. We offer pre-journey communication confirming pickup
              timing, passenger count, and special occasion details. We
              accommodate dietary restrictions with customized refreshments
              sourced from premium Sydney suppliers. Our itinerary flexibility
              allows route modifications during transit without additional
              charges.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Get Premium Experience & Service Details
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Our luxury transfers Sydney include red carpet service for VIP
              arrivals at exclusive venues. We provide door-to-door assistance
              with luggage handling and umbrella protection during inclement
              weather. Complimentary amenities feature premium Australian
              bottled water, mints, and current business publications. Vehicle
              interiors maintain immaculate presentation with fresh floral
              arrangements for special occasions. We coordinate arrival timing
              precisely with event schedules, ensuring punctual entrances. Our
              chauffeurs conduct advance route reconnaissance, avoiding
              construction delays and traffic congestion. With mobile
              connectivity, you can get real-time communication with personal
              assistants coordinating itinerary changes. We accommodate
              last-minute schedule adjustments without additional charges for
              established clients.
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
                  for Luxury Transfer Services
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
              Our Luxury Transfer Service Coverage Area
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              Campbelltown Taxi Cab provides exclusive luxury transfers Sydney
              across Campbelltown, the Macarthur region, Camden, Ingleburn, and
              surrounding suburbs. We serve five-star accommodations, private
              estates, corporate headquarters, and exclusive event venues
              throughout southwestern Sydney.
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
              Need Premium Luxury Transfer Service Now?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Exclusive booking | Professional chauffeurs | Complimentary
              amenities included
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
        fleetSectionTitle={"Premium Fleet Options for Luxury Private Transfers"}
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default LuxuryTransfer;
