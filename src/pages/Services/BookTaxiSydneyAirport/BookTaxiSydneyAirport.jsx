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
import bookTaxiImg from "../../../assets/services/book-taxi-sydney-airport.png";
import BookingForm from "../../../shared/BookingForm";
const faqs = [
  {
    question: "How Much Does A Taxi From Campbelltown To Sydney Airport Cost?",
    answer:
      "Our Campbelltown airport taxi fares range from $95-$130, depending on vehicle type and exact pickup location. We offer fixed pricing with no hidden fees. Maxi taxi Sydney Airport rates accommodate up to 11 passengers. All tolls are included in quotes upfront for complete transparency.",
  },
  {
    question: "Can I Book A Maxi Taxi Sydney Airport To The City For My Group?",
    answer:
      "Yes, our maxi taxi Sydney Airport to city service accommodates up to 11 passengers comfortably. Perfect for families or corporate groups traveling together. We provide ample luggage space and direct transfers. Book online or call 1300 450 428 for immediate confirmation.",
  },
  {
    question: "How Far In Advance Should I Book My Airport Taxi Sydney?",
    answer:
      "We recommend booking your airport taxi in Sydney at least 24 hours before departure for guaranteed availability. However, same-day bookings are accepted up to 30 minutes before pickup. Early bookings ensure preferred vehicle type selection and confirmed driver assignment for your transfer.",
  },
  {
    question:
      " Do You Provide Taxis To Sydney Airport From All Campbelltown Suburbs?",
    answer:
      "Absolutely. Our taxi to Sydney Airport service covers all Campbelltown suburbs, including Minto, Ingleburn, Camden, Eagle Vale, and surrounding areas. We operate across 50+ localities throughout the Macarthur region. Every neighborhood receives identical punctual service regardless of distance from our base.",
  },
  {
    question:
      "What Payment Methods Do You Accept For Taxi Sydney Airport Transfers?",
    answer:
      "We accept cash, all major credit cards, debit cards, and digital wallet payments for taxi Sydney Airport bookings. Corporate accounts receive monthly invoicing options with priority service. Make payment after journey completion. No prepayment required unless specifically requested for advance bookings.",
  },
  {
    question: " How Do I Find My Driver At Sydney Airport Arrivals?",
    answer:
      "Your airport taxi service Sydney driver waits at the designated terminal meeting point, holding a clear name board. We send SMS confirmation with driver details 60 minutes before pickup. For international arrivals at T1, drivers wait outside the customs exit. Domestic terminals T2/T3 have specified pickup zones.",
  },
  {
    question:
      "Are Your Maxi Taxi Sydney Airport Vehicles Suitable For Luggage?",
    answer:
      "Yes, our maxi taxi Sydney Airport fleet offers generous luggage capacity. Standard sedans hold 2-3 large suitcases. Maxi cabs accommodate 8+ bags comfortably. We handle oversized items like golf clubs, surfboards, and sports equipment. Roof racks are available upon request during booking for extra cargo.",
  },
  {
    question: " What Happens If My Flight To Sydney Airport Gets Delayed?",
    answer:
      "We monitor all flight schedules in real-time for your airport taxi Sydney booking. Flight delays trigger automatic driver notification without you calling us. No waiting charges apply for delays up to 60 minutes. Your taxi adjusts pickup timing automatically based on the actual landing time at Sydney Airport.",
  },
  {
    question:
      "Can I Book A Return Trip Taxi From Sydney Airport To Campbelltown?",
    answer:
      "Certainly. Book both directions simultaneously when arranging your Campbelltown airport taxi service. Return bookings receive a 10% discount on the combined fare. We confirm your return pickup after you provide the actual arrival time. Simply notify us once you land, and we'll dispatch immediately.",
  },
  {
    question: " Do You Offer Wheelchair Accessible Taxis To Sydney Airport?",
    answer:
      "Yes, our fleet includes wheelchair accessible vehicles for passengers requiring mobility assistance. These taxis to Sydney Airport feature ramp access and secure wheelchair restraints. Book at least 48 hours in advance for wheelchair vehicle availability. We ensure comfortable, dignified transport for all passengers regardless of mobility needs.}",
  },
];
const features = [
  "NSW transport authority licensed & fully insured operations.",
  "Drivers complete an annual advanced defensive driving certification.",
  "Vehicle maintenance exceeds manufacturer standards by 30%.",
  "Complimentary meet-and-greet service at all Sydney airport terminals.",
  "GPS dispatch technology reduces wait times to under 8 minutes.",
  "Fixed-rate pricing with zero hidden fees or surcharges.",
  "Multi-payment options: cash, card, digital wallets, and corporate accounts.",
  "Clean vehicle guarantee with post-trip sanitization protocol.",
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
const BookTaxiSydneyAiport = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "#1 Sydney Airport Taxi Services | 24/7 Sydney Cab Service",
        description:
          "Book campbelltown airport taxi for on-time Sydney Airport transfers, meet-and-greet pickup, fixed fares and 24/7 support from Campbelltown. Reserve now.",
        keywords:
          "taxi sydney airport, campbelltown airport taxi,sydney airport taxi,airport taxi sydney,taxi to sydney airport,maxi taxi sydney airport,airport taxi service sydney,maxi taxi sydney airport to city",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/book-taxi-sydney-airport",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Fast and Reliable Taxi Sydney Airport Service
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs is a leading NSW point-to-point transport
                provider, specialising in premium Sydney Airport transfers for
                individuals, families, and corporate travelers. Based in
                Campbelltown, New South Wales, our professional taxi fleet
                delivers on-time, reliable, and comfortable transport to and
                from Sydney Airport and surrounding regions.
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
                  "Campbelltown airport taxi service providing reliable Sydney Airport transfers with local drivers, clean vehicles and luggage assistance."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Reserve Your Sydney Airport Taxi in Minutes"}
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
                Premium Sydney Airport Taxi Service
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cab delivers reliable taxi services to Sydney
                Airport with professional drivers. We ensure timely pickups and
                stress-free travel for business and leisure passengers. Our
                fleet offers comfort at transparent rates. Available 24/7, we
                never let you miss departures.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Professional and experienced drivers</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Clean, comfortable, and modern vehicles</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Affordable & transparent taxi fares</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Available 24/7 for bookings</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={bookTaxiImg}
                alt={
                  "Campbelltown airport taxi service providing reliable Sydney Airport transfers with local drivers, clean vehicles and luggage assistance."
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
              Real-Time Flight Tracking for Your Sydney Airport Taxi
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Flight delays create massive stress for travelers heading to
              Sydney Airport terminals daily. Campbelltown Taxi Cab reduces this
              pressure with advanced flight-tracking technology integrated into
              our operations. Our dispatch system monitors live arrival and
              departure data from Sydney Airport’s T1 International, T2
              Domestic, and T3 Qantas terminals. When flights land early,
              drivers adjust pickup timing automatically without passenger
              action. We follow NSW airport-access rules and maintain approved
              meeting locations. Drivers wait in designated pickup zones to
              ensure you have reliable and compliant airport transfers.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              24/7 Sydney Airport Taxi Services from Campbelltown
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Campbelltown Taxi Cab operates around the clock, serving airport
              transfers across Sydney and the surrounding NSW regions. Our
              dedicated night team manages early departures, including 3 AM
              flights with safe timing. Red-eye arrivals at midnight get
              immediate taxi dispatch from our 24-hour operations center in
              Campbelltown. Weekend services run continuously without any
              premium surcharges. On public holidays like Christmas, New Year,
              and Easter, our full fleet remains available to prevent passengers
              from being stranded. Large family groups can travel comfortably in
              our 11-seater maxi taxis, with multiple luggage pieces securely
              stored. Same-day bookings are accepted up to 30 minutes before the
              required pickup from any Campbelltown suburb.
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
                  for Sydney Airport Taxi Service?
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
              Our Sydney Airport Taxi Service Area
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              Serving Campbelltown and surrounding regions with reliable taxi
              and maxi cab services to Sydney Airport across NSW.
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
              Need an Airport Taxi Service Sydney Immediately?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Book Sydney airport taxi instantly | Round-the-clock service |
              Transparent pricing
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
          "Premium Vehicle Options for Reliable Campbelltown Airport Transfers"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default BookTaxiSydneyAiport;
