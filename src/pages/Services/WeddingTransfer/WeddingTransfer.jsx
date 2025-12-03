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
import weddingImg from "../../../assets/services/campbelltown-events-transfers.jpg";
import BookingForm from "../../../shared/BookingForm";
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
  "Specialist wedding transport team.",
  "Proven reliability for time-sensitive events.",
  "Fleet designed for wedding comfort & style.",
  "Dedicated coordination for large wedding groups.",
  "Transparent pricing with no event markups.",
  "Trusted by local venues & event planners",
  "Backup vehicle readiness to prevent delays.",
  "Personalised route planning to match schedules.",
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
const WeddingTransfer = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "Premium Wedding Transfers Sydney | Reliable, Stylish Rides",
        description:
          "Keep your schedule on track with wedding transfers campbelltown, ensuring stress-free transport for you and guests between local venues. Get a quote today.",
        keywords:
          "Wedding Transfer Sydney, wedding transfers campbelltown,wedding transfers sydney",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/wedding-transfer",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Premium Wedding Transfer Sydney
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs delivers reliable wedding transfer Sydney
                services across Campbelltown, NSW, and Greater Sydney. Our team
                manages precise bridal travel, smooth venue navigation, and
                multi-stop routes with care. We provide elegant vehicles, expert
                coordination, and calm timing for your special day.
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
                  "Wedding transfers campbelltown cars moving bridal parties and guests between ceremony, photo locations and reception venues around Sydney."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Schedule Your Wedding Transfer Sydney Pickup"}
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
                Our Exclusive Wedding Transport Services Campbelltown Features
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cabs offers reliable, elegant, and
                well-coordinated transport designed for wedding events across
                Campbelltown and Sydney. Our wedding transfer Sydney services
                fleet supports guest arrivals, bridal travel, and event-day
                movements with care, timing, and complete professionalism.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Professional and wedding-trained drivers.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Luxury, clean, and photo-ready vehicles.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Transparent pricing with no event surcharges.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Available 24/7 for guest and family transport.</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={weddingImg}
                alt={
                  "Wedding transfers campbelltown cars moving bridal parties and guests between ceremony, photo locations and reception venues around Sydney."
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
              How Our Wedding Transfer Process Ensures On-Time Arrivals?
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Campbelltown Taxi Cabs uses structured route planning, real-time
              traffic monitoring, and coordinated driver dispatch ensuring every
              wedding transfer in Campbelltown and Sydney stays precisely on
              schedule. Our team reviews venue access regulations, ceremony
              timings, and guest arrival windows beforehand. We conduct advance
              route reconnaissance identifying potential delays and alternative
              pathways. Each vehicle departs with verified time buffers ensuring
              punctual arrivals for bridal parties, families, and photographers.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              We Manage Multi-Stop Wedding Travel Smoothly
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Campbelltown Taxi Cabs supports seamless multi-stop wedding travel
              across Campbelltown, Sydney, and surrounding NSW regions
              efficiently. Our team manages structured movement between family
              homes, ceremony locations, photography sites, and reception venues
              throughout your special day. We provide drivers with mapped
              sequences based on real event timelines, current traffic
              forecasts, and venue access guidelines. Each stop includes
              controlled time buffers maintaining smooth flow for bridal
              parties, families, and guests traveling together. Our diverse
              fleet accommodates mixed group sizes comfortably transporting
              luggage, delicate bridal gowns, and professional photography
              equipment securely. We assign coordinators tracking each vehicle
              in real time ensuring smooth transitions between locations.
              Communication systems enable instant updates when schedule
              adjustments become necessary during your wedding day.
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
                  for Wedding Transfers
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
             Wedding Transfer Service Areas Across Campbelltown & Sydney

            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
             We cover every major Campbelltown and Sydney suburb to ensure seamless wedding travel. You will be amazed to have a reliable and super safest tranportation, no matter from where you are starting and your destination would be. 

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
              Need Wedding Transfers Right Now?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Instant booking | 24/7 availability | Fixed prices for wedding transfers Campbelltown

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
          "Stylish Vehicle Options for Campbelltown Wedding Transport"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default WeddingTransfer;
