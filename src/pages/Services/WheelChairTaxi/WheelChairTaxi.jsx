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
import wheelchairImg from "../../../assets/services/campbelltown-wheelchair-accessible-taxi.png";
import React from "react";
const BookingForm = React.lazy(() => import("../../../shared/BookingForm"));
const faqs = [
  {
    question: "How Do I Book A Wheelchair Taxi in Sydney For Same-Day Travel?",
    answer:
      "Call 1300 450 428 for same-day wheelchair taxi Campbelltown bookings. Dispatch confirms availability within 30 minutes. We recommend 48-hour advance notice for guaranteed peak-time availability.",
  },
  {
    question:
      "What Types Of Wheelchairs Fit In Your Wheelchair Accessible Taxi Sydney?",
    answer:
      "Our Sydney wheelchair taxi accommodates manual, electric wheelchairs, and scooters. Weight capacity: 300kg. Reclining and pediatric models fit. Contact us for specific dimension confirmations.",
  },
  {
    question: "Do you charge extra fees for wheelchair taxi service Sydney?",
    answer:
      "No extra charges. Our wheelchair taxi service Sydney maintains identical base rates as standard taxis. No surcharges for ramps, securement, or equipment. Transparent pricing ensures affordable accessibility.",
  },
  {
    question:
      "Can family members or caregivers ride with me in the wheelchair taxi Campbelltown?",
    answer:
      "Yes, up to three companions travel alongside wheelchair users at no extra charge. Our wheelchair accessible taxi Sydney provides safe companion seating for family and caregivers.",
  },
  {
    question:
      "How far in advance should I book wheelchair taxi Sydney for medical appointments?",
    answer:
      "Book 48 hours ahead for guaranteed availability. We accept bookings three months in advance for regular dialysis, chemotherapy, or physiotherapy requiring consistent scheduling throughout treatments.",
  },
  {
    question:
      "Are your drivers trained specifically for wheelchair accessible taxi Sydney service?",
    answer:
      "Every driver holds Certificate III in Individual Support and NDIS clearance. They complete specialized wheelchair securement training and disability etiquette courses. Average experience: 5+ years.",
  },
  {
    question:
      "What happens if my medical appointment runs longer than expected?",
    answer:
      "Call dispatch when finished, and we will send your return wheelchair taxi Sydney immediately. No penalties apply. Consider our wait-and-return service for short appointments at lower cost.",
  },
  {
    question: "Can I book wheelchair taxi Campbelltown for airport transfers?",
    answer:
      "Yes, we provide wheelchair accessible taxi Sydney Airport transfers with meet-and-greet at all terminals. Our drivers assist with luggage navigation. You can book 72 hours ahead for coordination.",
  },
  {
    question:
      "Do you offer subscription plans for regular wheelchair taxi service Sydney users?",
    answer:
      "Yes, monthly plans guarantee availability, priority booking, and discounted rates for dialysis or therapy. NDIS participants receive claim documentation. Contact us for customized packages.",
  },
  {
    question:
      "Is your book wheelchair taxi Sydney service available during public holidays and weekends?",
    answer:
      "Our wheelchair taxi service Sydney operates 24/7, including all holidays. Like Christmas, New Year, Easter. No holiday surcharges. Medical needs don't pause, so our Campbelltown fleet remains operational.",
  },
];

const features = [
  "Largest wheelchair fleet in Southwestern Sydney.",
  "Average 15-minute response time across Campbelltown region.",
  "Guaranteed vehicle confirmation within 2 hours for next-day bookings.",
  "Direct partnerships with Campbelltown & Camden hospitals.",
  "Contracted services with 15 aged care facilities in Macarthur.",
  "Wheelchair dimensions accommodated.",
  "Zero cancellation fees for medical emergency rescheduling.",
  "Monthly subscription plans available for regular dialysis/therapy transport.",
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
const WheelChairTaxi = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "Wheelchair Taxi Sydney ,Campbelltown | Accessible Sydney Rides",
        description:
          "Wheelchair taxi Campbelltown offers safe, on-time accessible transport across Sydney, with ramps, secure seating and trained drivers. Call now to book.",
        keywords:
          "Wheelchair Taxi Sydney, wheelchair taxi CampbellTown,sydney wheelchair taxi,wheelchair accessible taxi sydney,book wheelchair taxi sydney,wheelchair taxi service sydney",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/wheelchair-accessible-taxi",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Trusted Wheelchair Taxi Sydney Service for Easy Mobility
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs offers a reliable wheelchair taxi service
                across Sydney and NSW. Our accessible vehicles support safe
                boarding, secure restraints, and smooth travel. Trained drivers
                assist with care, ensuring every passenger in Campbelltown rides
                with comfort and confidence. We maintain regular vehicle
                inspections and follow strict safety protocols for dependable
                service.
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
                  "Wheelchair taxi CampbellTown providing accessible transport with ramps, secure seating and trained drivers for local Sydney trips."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Reserve a Wheelchair Accessible Cab in Sydney"}
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
                Premium Wheelchair Taxi Service Across Campbelltown, Sydney
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cab offers specialized wheelchair taxi service
                across Campbelltown and the Sydney regions. Our accessible
                vehicles feature low-floor ramps for easy boarding. Trained
                drivers offer respectful assistance throughout every journey. We
                accommodate both manual and electric wheelchairs comfortably
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Purpose-built vehicles with low-floor ramp access.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Accommodates both manual and electric wheelchairs.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    {" "}
                    Drivers trained in disability awareness and assistance.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    {" "}
                    Available for medical, shopping, and social trips.
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={wheelchairImg}
                alt={
                  "Wheelchair taxi CampbellTown providing accessible transport with ramps, secure seating and trained drivers for local Sydney trips."
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
              Safety-Certified Wheelchair Accessible Taxis in Campbelltown and
              Sydney
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Book wheelchair taxi Sydney services through Campbelltown Taxi
              Cab, an NSW Point-to-Point Transport Commission-registered
              operator. Our wheelchair taxi service Sydney meets Australian
              Standard AS 3856.1 compliance for accessible vehicle
              modifications. Every vehicle undergoes mandatory 6-month ANCAP
              safety inspections at authorized NSW Service centers. Four-point
              wheelchair restraint systems comply with ISO 10542-1 international
              standards. Our drivers hold current NDIS Worker Screening
              clearances and Certificate III in Individual Support
              qualifications.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Our Luxury Wheelchair Taxi Features & Comfort Standards
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Our Sydney wheelchair taxi fleet delivers exclusive comfort
              through superior vehicle specifications for mobility passengers.
              Each wheelchair accessible taxi in Campbelltown, Sydney, features
              a generous cabin height exceeding standard requirements throughout
              the region. The wide door openings will provide effortless entry
              without awkward maneuvering during boarding. Spacious interiors
              offer ample turning radius for positioning wheelchairs
              comfortably. Advanced climate control maintains an ideal
              temperature regardless of the weather. State-of-the-art suspension
              absorbs road imperfections, delivering smooth rides across routes.
              Strategically positioned securement points ensure visible
              wheelchair anchoring for peace of mind. Dedicated companion
              seating accommodates family or caregivers traveling together.
              Specialized storage holds walkers, crutches, and medical equipment
              securely. Enhanced lighting illuminates entry areas for safe
              nighttime boarding at locations.
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
                  for Wheelchair Accessible Transport?
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
              Wheelchair Accessible Taxi Coverage Across Campbelltown, Sydney
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              Campbelltown Taxi Cab provides wheelchair accessible transport
              across 50+ suburbs in southwestern Sydney. Our coverage spans
              Campbelltown, Macarthur region, Camden areas, and surrounding NSW
              localities
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
              Book Your Wheelchair Taxi Sydney Immediately
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Wheelchair taxi Campbelltown available now | 24/7 service |
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
          "Comfortable Vehicle Choices for Safe Wheelchair Transport"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default WheelChairTaxi;
