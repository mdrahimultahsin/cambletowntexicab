import BookingForm from "../../shared/BookingForm";
import titleImg from "../../assets/services/campbelltown-service-hero-img.png";
import Container from "../../shared/Container";
import {Link, useNavigate, useParams} from "react-router";
import ButtonSecondary from "../../shared/ButtonSecondary";
import {FaCheckCircle, FaHandPointer, FaPhoneAlt, FaStar} from "react-icons/fa";
import {IoCallSharp, IoCarSport} from "react-icons/io5";
import FeatureFleet from "../Home/FeatureFleet";
import Faq from "../../shared/Faq";
import serviceBgImage from "../../assets/serviceBg.jpg";
import {serviceDetails} from "./ServiceDetailsSection";
import {FaLocationDot} from "react-icons/fa6";
import usePageTitle from "../../hooks/usePageTitle";
const features = [
  "Safe and dependable taxi service with baby & child car seats.",
  "Equipped with up to four baby and child seats for children from birth to age seven.",
  "Provide safe automobiles and secure Baby Seats Taxi Sydney.",
  "Well-known taxi service that provides child seats.",
  "Safe, dependable, and assured service.",
  "The highest-rated taxi service with child seats.",
  "Baby seats with full Australian certification.",
  "Assurance of the child will have a safe and enjoyable trip.",
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
const Services = () => {
  const params = useParams();
  const navigate = useNavigate()
  const servicetype = params.servicetype.toLowerCase();
  const selectedService = serviceDetails[servicetype];
  usePageTitle(`${params.servicetype.split("-").join(" ").toLocaleUpperCase()}`)
  return (
    <div>
   
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <span className="text-lg md:text-2xl lg:text-3xl font-bold capitalize py-3 px-8 bg-black/50 text-white rounded-xl font-playfair">
                {params.servicetype.split("-").join(" ")}
              </span>
              <p className="mt-8 text-sm md:text-base">
                At CampbellTown Taxi Cabs, we take pride in offering a diverse
                and modern fleet to cater to all your transportation needs in
                Sydney. Our vehicles are meticulously maintained, ensuring a
                safe, comfortable, and reliable ride every time you travel with
                us. Whether you’re traveling solo, with family, or a larger
                group, we have the perfect vehicle to suit your requirements.
              </p>
              <div className="flex py-4 gap-4 justify-center md:justify-start">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a href="tel:+611300450428" className="">
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
                  params.servicetype.split("-").join(" ") +
                  "Campbelltown Taxi Cabs"
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/*Booking Form */}
      <BookingForm
        params={params.servicetype.split("-").join(" ")}
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
              {/* Small Icon */}
              <div className="text-3xl text-secondary mb-3">
                {selectedService?.icon}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 capitalize">
                {selectedService?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                {selectedService?.description}
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaStar className="text-secondary" />
                  <span>Professional and experienced drivers</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaStar className="text-secondary" />
                  <span>Clean, comfortable and modern vehicles</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaStar className="text-secondary" />
                  <span>Affordable & transparent taxi fares</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaStar className="text-secondary" />
                  <span>Available 24/7 for bookings</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={selectedService?.image || titleImg}
                alt={selectedService?.title + "Campbelltown Taxi Cabs"}
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
              SAFE AND RELIABLE BABY TAXI SERVICE IN SYDNEY
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Campbelltown Taxi Cab isn't just about getting you from one
              destination to another - it's about ensuring your peace of mind
              while travelling with your little ones. The safety of our
              passengers is our top priority. We are a NSW point-to-point
              registered network. Our car seats are completely certified to
              Australian Standard AS 2010, and We ensure that we follow the
              Campbelltown taxi baby seat law. All car seats have complete
              labels and they are checked regularly by authorised checking
              stations. Travel with peace of mind knowing your child is safe in
              our taxi equipped with a baby seat.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              TAXI WITH BABY SEAT SYDNEY | Advance Taxi Cab Booking
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Booking a taxi with a baby seat through Campbelltown Taxi Cab is
              simple and stress-free. All you have to do is call Campbelltown
              Taxi Cab at +61 1300 450 428 or book online using our website. When
              you make your request, simply specify that you need a car seat for
              your child. Our maxi cab with baby car seat provides a safe and
              secure ride with our pre-booking services. Whether it's a trip to
              Sydney airport, a special event, or a family outing in Sydney, you
              can now ensure a stress-free journey by reserving a maxi cab
              equipped with a baby seat in advance. With our pre-booking option,
              you have the peace of mind of knowing that your transport needs
              for your little ones are taken care of. Simply let us know your
              schedule, and we'll have a maxi cab with a baby seat ready and
              waiting for your specified time and destination. No last-minute
              rushes or worries about availability - just a convenient and
              secure way to ensure a safe and comfortable ride for your family.
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
                  Why Choose{" "}
                  <span className="text-secondary">Campbelltown Taxi Cab</span>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair text-primary">
              Areas We Cover
            </h2>

            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Serving Campbelltown and surrounding regions with reliable taxi
              and maxi cab services
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
              Need a Ride Right Now?
            </h3>
            <p className="text-sm md:text-lg mb-6 md:font-semibold">
              Instant booking | 24/7 availability | No Hidden Fees
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-secondary text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-xs md:text-base">
                <FaPhoneAlt className="text-sm md:text-lg" />
                Call: 1300 123 456
              </button>
              <button onClick={()=>navigate("/book-a-taxi")} className="border-2 border-white text-white px-3 md:px-8 py-1 md:py-3 text-sm md:text-base rounded-full font-semibold hover:bg-secondary/80 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <IoCarSport className="text-sm md:text-lg" />
                Book Online Now
              </button>
            </div>
            <p className="text-sm mt-4 text-white">
              Average wait time: 8 minutes •  Transparent Pricing
            </p>
          </div>
        </Container>
      </section>

      <FeatureFleet />
      <Faq />
    </div>
  );
};

export default Services;
