import {
  FaCar,
  FaCheck,
  FaClock,
  FaCreditCard,
  FaExchangeAlt,
  FaHandPointer,
  FaStar,
} from "react-icons/fa";
import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import {IoCallSharp} from "react-icons/io5";
import {Link} from "react-router";
import Container from "../../shared/Container";
import ButtonSecondary from "../../shared/ButtonSecondary";
import BookingForm from "../../shared/BookingForm";
import Faq from "../../shared/Faq";
import FeatureFleet from "../Home/FeatureFleet";
import useSEO from "../../hooks/useSEO";

const BookATaxi = () => {
  const faqs = [
    {
      question: "How Early Can I Book a Campbelltown Taxi?",
      answer:
        "You can schedule a taxi at any time. Our Campbelltown taxi cabs operate 24/7 and respond quickly to all bookings. Early reservations help us secure the ideal vehicle and ensure a smooth pickup experience.",
    },
    {
      question: " Do You Track Flight Arrivals for Sydney Airport Pickups?",
      answer:
        " Yes. We monitor all Sydney Airport arrivals in real time to ensure timely pickups. Your driver adjusts their schedule if your flight is delayed or lands early, giving you a stress-free airport transfer.",
    },
    {
      question: " Can I Book a Campbelltown Maxi Taxi for a Group?",
      answer:
        "Yes. Our Campbelltown maxi taxi service carries up to eleven passengers with ample luggage space. It is perfect for airport runs, family trips, business groups, and event transport.",
    },
    {
      question: "Do You Provide Baby Seats With Online Bookings?",
      answer:
        "Yes. We supply baby seats and boosters on request to ensure safe travel for your child. Simply mention your child’s age during booking, and we will prepare the correct seat before pickup.",
    },
    {
      question: " Do You Offer Fixed Fares for Long-Distance Travel?",
      answer:
        " Yes. We provide clear, upfront pricing for long-distance trips across Sydney and nearby regions. Our fixed fares ensure full transparency with no hidden charges or unexpected fees.",
    },
    {
      question: "Can I Pay With Card or Cabcharge During My Ride?",
      answer:
        "Yes. All our Campbelltown taxi cabs accept debit cards, credit cards, Cabcharge, and cash. Payments are processed securely, giving you a smooth and convenient end to your journey.",
    },
    {
      question: " Do You Have Wheelchair-Accessible Taxis in Campbelltown?",
      answer:
        "Yes. We operate wheelchair-accessible taxis with ramps, secure anchor points, and trained drivers. Our service supports medical visits, airport transfers, and everyday travel with safety and dignity.",
    },
    {
      question: "Can I Book a Return Trip at the Same Time?",
      answer:
        " Yes. You can pre-book a return trip when scheduling your taxi. This ensures timely pickup for your return and allows our team to plan your travel with complete reliability.",
    },
    {
      question: "Do You Serve Suburbs Outside Campbelltown?",
      answer:
        " Yes. We cover Macarthur, Ingleburn, Glenfield, Camden, Oran Park, Gregory Hills, and surrounding areas. Our Sydney taxi cabs provide reliable transport across all nearby suburbs.",
    },
    {
      question: "Will I Receive Confirmation After Booking Online?",
      answer:
        "Yes. You will receive a call or message once our team reviews your booking. We confirm your pickup details, assign a vehicle, and keep you updated before your driver arrives.",
    },
  ];
  return (
    <div>
      {useSEO({
        title: "Best Sydney Taxi Cabs | Fast Campbelltown Bookings 24/7",
        description:
          "Sydney taxi cabs from Campbelltown with fast pickup times, GPS-tracked rides and 24/7 phone and online booking for airport, city and local trips. Call now.",
        keywords: "sydney taxi cabs,campbelltown taxi cabs",
        canonical: "https://campbelltowntaxicabs.com.au/book-a-taxi",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">
                Fast and Easy Taxi Booking in Campbelltown
              </h2>

              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs offers safe and reliable travel across
                Sydney. Our service supports families, groups, and business
                travellers with clean cars and trained drivers. Choose from
                sedans, SUVs, luxury cars, maxi cabs, and wheelchair-accessible
                taxis. We operate 24/7 and cover airport transfers, cruise
                trips, events, and corporate travel. Book your ride now and
                enjoy smooth, stress-free transport.
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
                alt="Sydney taxi cabs serving Campbelltown passengers for local trips, airport journeys, city commutes and late-night returns home."
              />
            </div>
          </div>
        </Container>
      </div>
      <BookingForm
        formTitle={"Book Your Campbelltown Taxi Fast and Easy"}
        className="mt-20!"
      />
      <section className="w-full bg-light py-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <Container>
          <div className="">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="section-title">
                Book Campbelltown Taxi Cabs in Simple Steps
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Schedule your taxi in seconds using our secure booking form.
                Share your trip details, choose your vehicle, and confirm your
                ride with our friendly team.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Whether you need a fast trip in Campbelltown or a long ride
                    across Sydney, our team is ready to help. Our Campbelltown
                    taxi cabs handle airport pickups, local visits, events, and
                    daily travel. We keep the booking process smooth, the
                    pricing clear, and the service reliable.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <FaCar className="text-primary" size={24} />
                      Looking to book a taxi in Campbelltown?
                    </h3>
                    <p className="text-gray-700">
                      Campbelltown Taxi Cabs offers Reliable Taxi Cabs, Maxi
                      Cabs, and Airport Taxi Cabs at affordable rates. Book your
                      Taxi Cab today.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                      <FaCheck className="text-green-500" />
                      Book Your Ride Online
                    </h3>
                    <p className="text-gray-700">
                      Our online booking form lets you confirm your trip in
                      minutes. Add your pickup details, select your taxi, and
                      send your request. Our team reviews it fast and assigns
                      the right driver for your schedule. You get clear updates
                      before every pickup.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Features */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <FaStar className="text-yellow-500" />
                    Why Our Campbelltown Taxi Booking Stands Out
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                        <FaCar className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Wide Range of Vehicles
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Choose a sedan, SUV, maxi cab, or luxury car for your
                          trip needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <FaClock className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Easy Trip Scheduling
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Book a taxi for now or reserve a planned pickup for
                          later.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <FaCreditCard className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Simple Payment Choices
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Pay with card, Cabcharge, or cash when your ride ends.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-300">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <FaExchangeAlt className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Convenient Return Booking
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Add a return pickup if you plan to come back with us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-4 pt-0 border-gray-200">
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
          </div>
        </Container>
      </section>

      <FeatureFleet
        fleetSectionTitle={"Reliable Taxi Vehicles Ready for Your Trip"}
      />

      <Faq faqs={faqs} />
    </div>
  );
};

export default BookATaxi;
