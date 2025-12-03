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
import parcelImg from "../../../assets/services/campbelltown-percel-delivery-service.jpg";
import React from "react";
const BookingForm = React.lazy(() => import("../../../shared/BookingForm"));
const faqs = [
  {
    question: "Do You Handle Urgent Same-Day Parcel Deliveries?",
    answer:
      "Yes. We provide fast same-day parcel delivery Sydney-wide using structured dispatch, live route checks, and priority handling steps. Our team ensures time-sensitive documents, boxes, and business items reach their destination within the required delivery window.",
  },
  {
    question: "Can Your Service Handle Multiple Parcel Pickups?",
    answer:
      "Yes. Our parcel delivery Campbelltown system manages multi-stop pickups from offices, warehouses, and suppliers. Drivers follow planned routes built from timing windows and location order to keep deliveries efficient and delay-free.",
  },
  {
    question: "Do You Transport Fragile Or Sensitive Parcels?",
    answer:
      "Yes. We protect fragile parcels with secure placement, stable vehicle positioning, and careful handling. Drivers follow strict movement steps designed for delicate items, electronics, samples, or paperwork requiring controlled transport across Sydney.",
  },
  {
    question: "Is Your Pricing Affordable For Regular Business Deliveries?",
    answer:
      "Yes. We offer cheap parcel delivery Sydney businesses depend on for routine transport. Our fixed-rate structure supports bulk or repeat deliveries without hidden charges, helping companies control logistics costs during busy periods.",
  },
  {
    question: "Do You Offer Tracking Updates For Deliveries?",
    answer:
      "Yes. We provide live tracking updates through our dispatch system. You receive clear progress information from pickup to drop-off, allowing accurate planning for business tasks and home deliveries across Campbelltown and Sydney.",
  },
  {
    question: "Can You Deliver Parcels During Late-Night Hours?",
    answer:
      "Yes. Our team operates 24/7 and supports night deliveries for urgent items. We manage secure pickups and controlled drop-offs, ensuring reliable parcel movement even during after-hours requirements in Sydney and Campbelltown.",
  },
  {
    question: "Do You Handle Large Or Bulky Parcel Items?",
    answer:
      "Yes. We allocate vehicles suited for bulky boxes or equipment. Drivers secure items properly and follow stable transport steps, ensuring safe delivery across busy commercial routes in Sydney and surrounding NSW regions.",
  },
  {
    question: "Are Your Drivers Trained For Secure Parcel Handling?",
    answer:
      "Yes. Our drivers follow verified handling procedures, pickup checks, and identification steps. Their training ensures reliable movement for business parcels, personal packages, and commercial loads across Campbelltown and Sydney.",
  },
  {
    question: "Can I Schedule Deliveries For Specific Time Windows?",
    answer:
      "Yes. We support timed delivery windows for offices, retail stores, homes, and commercial locations. Our system coordinates precise drop-offs across Sydney to match customer availability and business operating hours.",
  },
  {
    question: "Do You Support Recurring Parcel Deliveries For Businesses?",
    answer:
      "Yes. We manage recurring parcel delivery Sydney services with structured schedules. Businesses can book routine pickups for inventory, documents, or supplies, ensuring stable logistics support throughout Campbelltown and Greater Sydney.",
  },
];
const features = [
  "Drivers trained in venue-access and event-traffic control.",
  "Vehicles sized for groups and event equipment.",
  "Clear pricing with no surge fees on event days.",
  "24/7 support for late-night concerts and sports events.",
  "Trusted by local Sydney and Campbelltown venues",
  "Structured dispatch for busy calendar days.",
  "Live route optimisation to bypass high-density event zones.",
  "Coordinated multi-vehicle planning for large groups.",
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
const PercelDelivery = () => {
  const navigate = useNavigate();

  return (
    <div>
      {useSEO({
        title: "Cheap Parcel Delivery Sydney | Campbelltown Taxi Cabs",
        description:
          "Need urgent parcel delivery sydney? Get fast same-day drops from Campbelltown, live driver contact and secure handling. Call now to book.",
        keywords:
          "Parcel Delivery Sydney, cheap parcel delivery sydney,parcel delivery campbelltown",
        canonical:
          "https://campbelltowntaxicabs.com.au/services/parcel-delivery",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Affordable Express Parcel Delivery Sydney
              </h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs offers fast parcel delivery Sydney
                residents trust daily. We handle documents, boxes, packages, and
                business items with secure transport across Campbelltown, Sydney
                and NSW. Our drivers follow strict handling rules and
                time-focused delivery steps for safe, smooth, affordable parcel
                movement.
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
                  "Parcel delivery sydney from Campbelltown shops to Sydney suburbs with secure handling, direct routes and prompt arrivals."
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        formTitle={"Secure Your Parcel Delivery Sydney Now"}
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
                Exclusive Parcel Delivery Benefits Across Campbelltown, Sydney
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Campbelltown Taxi Cabs delivers reliable parcel delivery Sydney
                customers trust. We support urgent packages, business
                deliveries, and same-day transport across Sydney and NSW. Our
                team manages safe handling, route control, and time-focused
                delivery steps.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Event-trained and logistics-aware drivers.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Clean, secure, and monitored vehicles.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Fast delivery timing for urgent parcels.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Fixed pricing with no hidden fees.</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Available 24/7 for last-minute deliveries.</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={parcelImg}
                alt={
                  "Parcel delivery sydney from Campbelltown shops to Sydney suburbs with secure handling, direct routes and prompt arrivals.."
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
              How Our Parcel Delivery Process Ensures Timely Drop-Offs?
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Our parcel delivery team follows strict pickup checks and
              real-time tracking steps. We plan fast routes across Campbelltown
              and Sydney using current traffic updates. Drivers protect every
              parcel with controlled handling methods. We manage urgent
              documents, business items, and customer packages with secure
              movement and steady timing. You receive consistent delivery
              support designed for time-critical transport needs. We adjust
              routes instantly when unexpected delays appear. Our team maintain
              clear communication to keep you updated throughout the delivery.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              We Manage Multi-Stop Parcel Transport Smoothly
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Campbelltown Taxi Cabs supports multi-stop parcel delivery
              Campbelltown businesses use for daily operations. We manage office
              pickups, warehouse dispatch cycles, supplier transfers, and
              doorstep deliveries across Sydney. Drivers follow structured
              schedules built from traffic forecasts, timing windows, and
              handling requirements. We move documents, fragile parcels,
              equipment, product samples, and light inventory with secure
              placement and stable transport. Our system tracks driver progress,
              monitors delays, and updates routes when roadworks appear. You
              gain smooth parcel movement with flexible timing, fast
              communication, and reliable service patterns that protect your
              items during every stage of transport across Campbelltown and
              Sydney. We support repeat delivery cycles for ongoing business
              needs. Expect coordinate grouped drop-offs to maintain speed and
              accuracy.
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
                  for Percel Delivery
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
              Parcel Delivery Service Areas Across Campbelltown and Sydney
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              We deliver parcels across Campbelltown, Sydney CBD, and
              surrounding suburbs, offering fast pickups, secure handling, and
              reliable same-day and next-day delivery options.
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
              Need Percel Delivery Right Now?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Instant booking | 24/7 availability | Fixed prices for percel
              Delivery Campbelltown
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
          "Reliable Fleet Supporting Safe Parcel Transport in Campbelltown"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default PercelDelivery;
