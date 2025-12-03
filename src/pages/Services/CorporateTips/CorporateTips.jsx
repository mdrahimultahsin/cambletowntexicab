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
import corporateTripsImg from "../../../assets/services/campbelltown-corporate-trips.jpeg";
import BookingForm from "../../../shared/BookingForm";
const faqs = [
  {
    question: "How Do Corporate Taxi Services Sydney Billing Systems Work?",
    answer:
      " We provide monthly consolidated invoices detailing all employee trips with cost center codes. Integration with accounting platforms automates expense reconciliation. Credit terms extend 60 days for established accounts with ABN verification.",
  },
  {
    question:
      " Can I Book Corporate Taxi Services Campbelltown Without Manager Approval?",
    answer:
      " Booking permissions depend on your company's authorization workflow settings. We configure approval requirements matching internal policies. Some accounts allow direct employee booking while others require manager pre-authorization codes before ride confirmation.",
  },

  {
    question:
      "What Makes Corporate Taxi Services Sydney Different From Regular Taxi qookings?",
    answer:
      " Corporate accounts receive dedicated management, consolidated billing, and expense tracking. Priority dispatch ensures punctuality. Volume discounts apply monthly. Regular taxis lack business invoicing and account coordination features completely.",
  },
  {
    question:
      " How Quickly Can We Set Up Corporate Taxi Services For Our Business?",
    answer:
      " Account setup completes within 48 hours after receiving the company ABN and authorization details. We provide employee booking instructions and portal access immediately. Training sessions are available for administrative staff managing transportation coordination.",
  },
  {
    question:
      " Do You Provide Corporate Taxi Services For After-Hours Shift Workers?",
    answer:
      " Yes, we operate 24/7, including overnight shifts and early morning starts. After-hours corporate accounts receive identical service standards. Shift worker transportation ensures employees reach home safely regardless of departure times throughout the night.",
  },
  {
    question:
      " Can We Track Employee Rides In Real-Time For Security Purposes?",
    answer:
      " Yes, our vehicle tracking system provides real-time location monitoring. Executive assistants and security personnel access live trip progress. GPS timestamping verifies pickup and drop-off times. Ride completion notifications are sent automatically via email.",
  },
  {
    question:
      " What Payment Methods Do Corporate Taxi Services Sydney Accounts Accept?",
    answer:
      " We accept monthly invoicing with bank transfer payments. Credit card autopay is available for automated billing. Direct debit arrangements simplify payment processing. Payment terms extend 60 days for qualified accounts meeting established credit criteria.",
  },
  {
    question:
      " Do You Provide Reporting For Corporate Travel Policy Compliance?",
    answer:
      " Yes, monthly reports detail all trips with pickup/drop-off locations and times. Data exports integrate with expense management systems. Compliance reporting identifies policy exceptions requiring review. Quarterly business reviews analyze spending patterns and optimization opportunities.",
  },
  {
    question: " Can Multiple Employees From Our Company Book Simultaneously?",
    answer:
      " Absolutely. Our dispatch system handles multiple concurrent bookings from the same corporate account. Each employee receives a dedicated vehicle assignment. Group coordination is available for team events requiring simultaneous departures. No booking conflicts occur within accounts.",
  },
  {
    question:
      " Do Corporate Taxi Services Campbelltown Offer Volume Discounts?",
    answer:
      " Yes, volume-based discount tiers activate at 100, 250, and 500 monthly rides. Discounts range from 10% to 20% depending on usage levels. Annual contracts receive additional preferential pricing. Contact us for customized corporate rate structures.",
  },
];
const features = [
  " 6,500+ monthly corporate rides across Sydney and Macarthur districts.",
  "94.8% on-time performance verified through GPS timestamping technology.",
  "Drivers with a minimum of five years of commercial driving experience.",
  "Campbelltown Chamber of Commerce partnership with member discount rates.",
  "Real-time vehicle tracking for executive assistant schedule coordination.",
  "Quarterly business reviews analyzing transportation spend and optimization.",
  "Same-Vehicle assignment for regular executive commute routes.",
  "Carbon footprint reporting for corporate sustainability initiatives.",
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
const CorporateTips = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "Corporate Taxi Services Sydney | 24/7 Taxi Service",
        description:
          "Book luxury airport transfers with Campbelltown Taxi Cabs. Enjoy a hassle-free airport taxi service. Call ☎️ 1300 450 428 to book your airport taxi transfer now!",
        keywords:
          "Corporate Taxi Services Sydney, corporate taxi services campbelltown",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/corporate-tips",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Premium Corporate Taxi Services Sydney
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cab delivers reliable corporate taxi services
                Sydney for businesses requiring professional employee
                transportation. Our corporate taxi services Campbelltown fleet
                operates 24/7, serving Macarthur region companies with
                guaranteed punctuality. We provide executive rides, team
                transport, and client entertainment transfers across NSW
                metropolitan areas.
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
                  "Corporate taxi services sydney for Campbelltown companies requiring account bookings, airport transfers, staff shuttles and client transport."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Book Corporate Taxi Services Sydney Instantly"}
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
                Reliable Corporate Taxi Services Across Campbelltown, Sydney &
                More Areas
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cab pioneered corporate taxi services Sydney
                with streamlined booking platforms designed for business
                efficiency. Our fleet accommodates solo executives and team
                groups simultaneously. We maintain partnerships with notable
                Campbelltown businesses, including manufacturing facilities and
                professional service firms.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Streamlined booking platforms designed for business
                    operational efficiency.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Accommodates solo executives and team groups simultaneously
                    daily.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    {" "}
                    Partnerships with 150+ Campbelltown businesses, including
                    manufacturing facilities.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Booking confirmation within five minutes, ensuring
                    operational certainty.
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={corporateTripsImg}
                alt={
                  "Corporate taxi services sydney for Campbelltown companies requiring account bookings, airport transfers, staff shuttles and client transport."
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
              How Our Corporate Taxi System Ensures On-Time Business Travel
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Our corporate transport Sydney team follows structured pickups and
              live traffic checks to protect your schedule. We plan fast routes
              across Campbelltown and Sydney using updated road data. Drivers
              follow clear corporate-handling steps for safe, discreet travel.
              You enjoy reliable movement ideal for meetings, client visits,
              airport transfers, and corporate events needing steady executive
              service. Our system adapts quickly to delays, ensuring business
              travel stays punctual.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Our Exclusive Business Journey Types & Service Flexibility
            </h2>
            <p className="mt-2 text-sm md:text-base">
              We have a wide range of corporate taxi services in Campbelltown
              designed to support daily business transportation needs across
              metropolitan areas. We transport employees between office
              locations for meetings and collaborative work, and we provide
              client pickup services to ensure visitors arriving at Campbelltown
              Station reach your premises promptly. We also handle site
              inspection transfers, connecting teams to industrial facilities,
              warehouses, and construction sites throughout the Macarthur
              district. Our trade show transport solutions move staff to
              exhibition venues with their presentation materials, while our
              interview candidate transfers help create a professional first
              impression. We offer reliable after-hours services for shift
              workers, along with business-lunch transfers so executives can
              attend restaurant meetings without parking concerns.
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
                  for Corporate Taxi Services Sydney
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
              Our Corporate Taxi Services Sydney Coverage Area
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              Campbelltown Taxi Cab provides comprehensive corporate taxi
              services across 50+ surrounding business districts. We serve
              industrial estates, office parks, manufacturing facilities, and
              commercial centers throughout southwestern Sydney.
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
              Need Corporate Taxi Services Sydney Right Now?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Instant business booking | Dedicated account management | Monthly
              consolidated invoicing
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
          "Executive Fleet Options for Professional Corporate Travel"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default CorporateTips;
