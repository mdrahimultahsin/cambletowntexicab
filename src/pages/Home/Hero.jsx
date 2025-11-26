import Container from "../../shared/Container";
import {Link} from "react-router";
import {FaPhoneVolume} from "react-icons/fa";
import Carousel from "../../components/Carousel";
import sedanCarImg from "/campbelltown-easy-sedan-img.png";
import luxuryVehicleImg from "/campbelltown-luxury-vehicle.png";
import suvWagonImg from "/campbelltown-suv-wagon.png";
import carnivalImg from "/campbelltown-kia-carnival-img.png";

const Hero = () => {
  return (
    <section className="bg-[url('/src/assets/campbelltown-taxi-cab-herobg.jpg')] w-full bg-no-repeat bg-cover bg-fixed bg-top">
      <div className="w-full h-full bg-black/60">
        <Container>
          <div className="text-center text-white">
            <div className="py-30">
              <h1 className="text-2xl md:text-5xl font-semibold font-playfair">
                Campbelltown Taxi Cabs - Luxury Taxi Service Campbelltown NSW
              </h1>
              <p className="md:text-lg my-6">
                Welcome to Campbelltown Taxi Cabs, the trusted choice for
                reliable and affordable taxi service in Campbelltown, NSW.
                Whether you're heading to the airport, attending an event, or
                need a comfortable ride around Sydney, we guarantee safe,
                punctual, and enjoyable rides.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="tel:+1300450428"
                  className="px-6 py-3 bg-primary  text-white rounded-md font-semibold text-sm md:text-xl hover:bg-primary/80 hover:scale-105 hover:transition-all flex items-center gap-2"
                >
                  <FaPhoneVolume className="animate-bounce text-red-500 rotate-360" />{" "}
                  1300 450 428
                </a>
                <Link
                  to="/fleet"
                  className="px-6 py-3 bg-primary  text-white rounded-md font-semibold text-sm md:text-xl hover:bg-primary/80 hover:scale-105 hover:transition-all"
                >
                  Our Fleet
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-semibold font-playfair">
                Comfortable and Affordable Taxi And Maxi Service for Large
                Groups
              </h2>
              <p className="text-base md:hidden my-4">
                With professional drivers, affordable rates, and 24/7
                availability, we provide trustworthy and hassle-free
                transportation every time. Book your Campbelltown maxi taxi
                today for a reliable and affordable transportation option!
              </p>
              <p className="hidden md:block md:text-lg my-6">
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

              {/* for tablet and laptop device */}
              <div className="grid-cols-4 pb-30 hidden md:grid">
                <div className="flex flex-col justify-end">
                  <img
                    src={sedanCarImg}
                    alt="Easy Sedan Car Campbelltown Taxi Cabs"
                  />
                  <p className="text-xl lg:2xl">Easy Sedan</p>
                </div>
                <div className="flex flex-col justify-end">
                  <img
                    src={luxuryVehicleImg}
                    alt="Luxury Taxi Vehicle Campbelltown Taxi Cabs"
                  />
                  <p className="text-xl lg:2xl">Luxury Vehicle</p>
                </div>
                <div className="flex flex-col justify-end">
                  <img
                    src={suvWagonImg}
                    alt="Suv or Wagon Car Campbelltown Taxi Cabs"
                  />
                  <p className="text-xl lg:2xl">Suv or Wagon</p>
                </div>
                <div className="flex flex-col justify-end">
                  <img
                    src={carnivalImg}
                    alt="Kia Carnival Car Campbelltown Taxi Cabs"
                  />
                  <p className="text-xl lg:2xl">Kia Carnival</p>
                </div>
              </div>
              {/* for mobile device only */}
              <div className="md:hidden  pb-30">
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
