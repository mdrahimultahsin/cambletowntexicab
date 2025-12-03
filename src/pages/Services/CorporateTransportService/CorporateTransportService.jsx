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
import corporateImg from "../../../assets/services/campbelltown-corporate-trips.jpeg";
import BookingForm from "../../../shared/BookingForm";
const faqs = [
  {
    question:
      "Do You Manage Recurring Transport Schedules For Corporate Staff?",
    answer:
      "Yes. We create recurring schedules for teams needing daily or weekly movement. Our Campbelltown corporate transport system updates routes quickly and keeps businesses informed about changes. This ensures smooth travel for staff across multiple locations.",
  },
  {
    question:
      "Can You Handle Large Corporate Teams Needing Multiple Vehicles At Once?",
    answer:
      "Yes. We coordinate vans, sedans, and maxi taxis for efficient group movement. Our corporate group transport Sydney service manages simultaneous pickups, staggered arrivals, and inter-office travel without delays, even during peak hours.",
  },
  {
    question: "Do You Offer Direct Invoicing For Corporate Clients?",
    answer:
      "Yes. Corporate accounts receive consolidated invoicing with PO references, GST summaries, and monthly statements. This helps finance teams track travel spending easily and maintain compliance with internal business policies.",
  },
  {
    question: "Can You Support Urgent Executive Travel At Short Notice?",
    answer:
      "Yes. We maintain priority dispatch for directors and managers needing urgent movement. Our Sydney corporate transport network assigns the nearest available vehicle and ensures rapid turnaround for fast business response times.",
  },
  {
    question:
      "Do Your Drivers Understand Corporate Protocols And Privacy Needs?",
    answer:
      "Yes. Our drivers follow clear conduct rules for corporate travel. They respect confidentiality during calls, documents, and meetings. This approach helps executives travel with privacy and confidence across Campbelltown and Sydney.",
  },
  {
    question:
      "Can You Arrange Airport Transfers For Visiting Business Partners?",
    answer:
      "Yes. We coordinate airport pickups for domestic and international guests. Drivers manage timing, signage, and route planning to ensure visitors reach offices, hotels, or events with a smooth and professional corporate experience.",
  },
  {
    question: "Do You Handle Transport For Conferences Or Corporate Events?",
    answer:
      "Yes. We manage fleet scheduling for conferences, seminars, and business functions. Our team assigns vehicles based on attendee numbers, timing, and venue access rules to deliver reliable movement throughout the event schedule.",
  },
  {
    question: "Can Corporate Clients Track Their Vehicle Status In Real Time?",
    answer:
      "Yes. We provide live updates for assigned vehicles. Clients receive notifications about arrival windows, route progress, and delays. This helps teams plan movement more precisely and reduces downtime waiting for transport.",
  },
  {
    question:
      "Do You Offer After-Hours Support For Late-Night Corporate Travel?",
    answer:
      "Yes. Our after-hours team manages evening and early-morning trips for corporate staff. This ensures consistent access to transport when businesses operate outside standard hours or require late movement across Sydney.",
  },
  {
    question: "Can You Support Long-Distance Corporate Trips Across NSW?",
    answer:
      "Yes. We manage planned long-distance travel for executives and staff. Vehicles are assigned based on comfort and route needs, ensuring business travelers experience efficient and uninterrupted movement beyond Sydney and Campbelltown.",
  },
];
const features = [
  "12-minute average pickup time in Campbelltown, Sydney.",
  "Trusted by 200+ corporate partners, including Macquarie Group.",
  "Emergency dispatch with a 20-minute executive guarantee.",
  "Direct invoicing to PO numbers for compliance.",
  "Multi-vehicle coordination for group executive travel.",
  "After-hours executive hotline with priority access.",
  "Free corporate travel policy consultation. ",
  "riority access during high-demand periods for contracted corporate clients.",
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
const CorporateTransportService = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "Corporate Group Transport Sydney | Campbelltown Hire",
        description:
          "Corporate group transport Sydney for meetings, events and airport runs, with Campbelltown corporate transport, invoicing and pickups. Enquire today.",
        keywords:
          "Corporate Group Transport Sydney, campbelltown corporate transport,sydney corporate transport",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/corporate-transport-services",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Premium Corporate Transport Services Campbelltown
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cab offers premium corporate transport
                services in Sydney CBD, Macarthur business district, and NSW
                metropolitan regions. Our executive fleet serves Fortune 500
                companies with guaranteed punctuality for client meetings and
                airport transfers. ISO 9001 quality-certified operations ensure
                professional chauffeur standards. Available 24/7 for business
                travel needs with the best management.
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
                  "Corporate group transport sydney solutions for Campbelltown businesses needing reliable shuttles to meetings, events and Sydney Airport transfers."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Quickly Reserve Executive Corporate Transport "}
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
                Professional Corporate Transport Services Across Campbelltown,
                Sydney
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cab delivers elite corporate transport
                services across Sydney's business precincts with dedicated
                account managers. Our executive chauffeurs maintain impeccable
                presentation standards for client-facing journeys. Real-time GPS
                tracking provides transparency for expense reporting compliance.
                We serve ASX-listed companies and multinational corporations
                requiring reliable corporate transport.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Dedicated corporate account managers for seamless billing.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Executive chauffeurs with professional presentation
                    standards.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Real-time GPS tracking for expense compliance</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Serving ASX-listed and multinational corporations</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={corporateImg}
                alt={
                  "Corporate group transport sydney solutions for Campbelltown businesses needing reliable shuttles to meetings, events and Sydney Airport transfers."
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
              Corporate Transport Solutions for Sydney Businesses
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Campbelltown Taxi Cab delivers tailored transport programs
              designed for Sydney corporations that rely on reliable, timely
              travel. We provide priority fleet access for staff, scheduled
              pick-ups for executives, and on-demand rides across NSW. Our team
              coordinates daily employee transfers, airport connections, and
              event transport with real-time monitoring. Businesses receive a
              single consolidated monthly statement covering all completed
              trips, with detailed ride logs that support internal travel
              policies and budgeting needs.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              We Meet Vehicle Fleet & Executive Standards
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Our corporate transport fleet features luxury sedans and spacious
              vehicles meticulously maintained for executive business travel.
              Premium sedans accommodate four passengers with two bags. They
              offer plush leather seating and advanced climate control systems.
              Executive SUVs seat seven passengers with five bags. This provides
              superior comfort for corporate group transport Sydney transfers.
              All vehicles undergo rigorous safety inspections meeting NSW
              Point-to-Point Transport standards. Kia Carnival premium vans
              accommodate seven executives with eight bags. Interior amenities
              include mobile charging capabilities and professional-grade air
              conditioning. Privacy features ensure discretion during
              confidential business conversations throughout journeys. Vehicle
              presentation maintains immaculate standards with professional
              detailing between bookings. Our fleet operates entirely smoke-free
              with hypoallergenic cleaning protocols.
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
                  for Corporate Transport Solutions?
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
              Business Transport Service Areas We Cover in Campbelltown
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              We support corporate travel across Campbelltown, Sydney CBD, and
              key NSW business zones. Our team manages structured routes that
              match meeting schedules, office hubs, and executive transport
              needs.
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
              Need Immediate Executive Transport?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Instant Sydney corporate transport | 24/7 support | Fixed
              corporate rates
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
          "Executive Fleet Options for Corporate Group Transport"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default CorporateTransportService;
