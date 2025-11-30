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
import usePageTitle from "../../hooks/usePageTitle";

const BookATaxi = () => {
  usePageTitle("Book A Taxi");
  return (
    <div>
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white md:gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <span className="text-2xl md:text-4xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl font-playfair">
                Book A Taxi
              </span>

              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs is a Sydney based maxi cab service
                established in 2010. We provide affordable, reliable, and safe
                transport for families, groups, and business travelers. Our
                fleet includes sedans, SUVs, maxi vans, luxury cars, and
                wheelchair accessible taxis. We operate 24/7 across all Sydney
                suburbs and offer airport transfers, cruise transfers, corporate
                trips, and baby seat taxis.
              </p>
              <div className="flex py-4 gap-4 justify-center md:justify-start">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a href="tel:+1300450428" className="">
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
                alt="Campbelltown Taxi Cabs"
              />
            </div>
          </div>
        </Container>
      </div>
      <BookingForm className="mt-20!" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-primary">
                Book Campbelltown Taxi Cabs in Simple Steps
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Making your taxi booking with us is simple and convenient. Use
                our online taxi booking system or call our customer service team
                to schedule your ride.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Whether you need a quick local trip around Campbelltown, a
                    long-distance journey, or Sydney airport transfer pickup or
                    drop off, we ensure a hassle-free booking process,
                    competitive rates, and a reliable service to meet your
                    travel needs.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <FaCar className="text-primary" size={24} />
                      Looking to book a taxi in Campbelltown?
                    </h3>
                    <p className="text-gray-700">
                      Campbelltown Taxi Cabs offers Reliable Taxi Cabs, Maxi
                      Cabs and Airport Taxi Cabs at affordable rates. Book your
                      Taxi Cab today.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                      <FaCheck className="text-green-500" />
                      Book Taxi Online
                    </h3>
                    <p className="text-gray-700">
                      We make the taxi booking process as simple as possible and
                      give you all the booking options you need. Simply fill the
                      taxi booking form and follow the confirmation process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Features */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <FaStar className="text-yellow-500" />
                    Key Features of Campbelltown Taxi Booking
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                        <FaCar className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Multiple Vehicle Options
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Book A Taxi Cab, Maxi Cab or A Premium Ride to suit
                          your needs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <FaClock className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Flexible Timing
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Find a Taxi Cab if you are Ready Now or Book Taxi for
                          Later Time
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <FaCreditCard className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Multiple Payment Options
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Pay the Taxi Driver directly with Debit/Credit Card,
                          Cabcharge or Cash
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-300">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                        <FaExchangeAlt className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Return Trip Option
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Choose Return Trip if you are planning to return back
                          with us
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

      <FeatureFleet />

      <Faq />
    </div>
  );
};

export default BookATaxi;
