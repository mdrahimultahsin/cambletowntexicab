import Container from "../../shared/Container";
import {Link} from "react-router";
import {FaPhoneVolume} from "react-icons/fa";
import Carousel from "../../components/Carousel";
import heroBg from "../../assets/campbelltown-taxi-cab-herobg.jpg";

const Hero = () => {
  return (
    <section
      className="w-full bg-no-repeat bg-cover bg-top md:bg-fixed"
      style={{backgroundImage: `url(${heroBg})`}}
    >
      <div className="w-full h-full bg-black/60">
        <Container>
          <div className="text-center text-white">
            <div className="pt-20 md:pt-25 pb-10 md:pb-20 ">
              <h1 className="font-playfair font-black text-2xl sm:text-3xl md:text-6xl leading-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                <span className="block text-primary">
                  Campbelltown Taxi Cabs
                </span>
                <span className="block font-medium text-lg md:text-3xl text-white mt-2 drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
                  Luxury Taxi Service Campbelltown NSW
                </span>
              </h1>

              <p className="md:max-w-7xl md:mx-auto text-center text-sm md:text-lg my-4 md:my-6">
                Welcome to Campbelltown Taxi Cabs, the trusted choice for
                reliable and affordable taxi service in Campbelltown, NSW.
                Whether you're heading to the airport, attending an event, or
                need a comfortable ride around Sydney, we guarantee safe,
                punctual, and enjoyable rides.
              </p>
              <div className="flex justify-center gap-2 sm:gap-4 md:gap-6">
                <a
                  href="tel:+1300450428"
                  className="px-6 py-3 bg-primary  text-white rounded-md font-semibold text-sm  md:text-xl hover:bg-primary/80 hover:scale-105 hover:transition-all flex items-center gap-2"
                >
                  <FaPhoneVolume className="animate-bounce text-red-500 rotate-360" />{" "}
                  1300 450 428
                </a>
                <Link
                  to="/fleet"
                  className="px-6 py-3 bg-white  text-primary border border-white hover:text-white transition-all hover:border-transparent rounded-md font-semibold text-sm md:text-xl hover:bg-primary/80 hover:scale-105 hover:transition-all"
                >
                  Our Fleet
                </Link>
              </div>
            </div>

            <div>
              <h2 className="block font-medium text-lg md:text-3xl text-white ">
                Comfortable and Affordable Taxi And Maxi Service for Large
                Groups
              </h2>
              <p className="md:max-w-7xl md:mx-auto text-center text-sm md:text-lg my-4">
                With professional drivers, affordable rates, and 24/7
                availability, we provide trustworthy and hassle-free
                transportation every time. Book your Campbelltown maxi taxi
                today for a reliable and affordable transportation option!
              </p>
              <p className="md:max-w-7xl md:mx-auto text-center text-sm md:text-lg my-2 ">
                As the leading maxi and taxi cabs service provider in
                Campbelltown, we’re committed to safety and punctuality in every
                ride. Our Maxi and Taxi Campbelltown service is designed to
                accommodate up to 11 passengers in comfort and style. Perfect
                for families, corporate teams, or friends, our maxi taxis offer
                air conditioning, generous luggage space, and plush seating for
                everyone’s comfort. With professional drivers, affordable rates,
                and 24/7 availability, we provide trustworthy and hassle-free
                transportation every time. Book your Campbelltown maxi taxi
                today for a reliable and affordable transportation option!
              </p>

              {/* for mobile device only */}
              <div className="mt-10 md:mt-20  pb-30">
                <Carousel />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
