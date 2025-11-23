import Container from "../../shared/Container";
import {Link} from "react-router";
import {FaPhoneVolume} from "react-icons/fa";
import Carousel from "../../components/Carousel";
import sedanCarImg from "../../assets/Easy-Sedan.png";
import luxuryVehicleImg from "../../assets/Luxury-Vehicle.png";
import suvWagonImg from "../../assets/Suv-Wagon.png";
import carnivalImg from "../../assets/Kia-Carnival.png";

const Hero = () => {
  return (
    <section className="bg-[url('/src/assets/herobg.jpg')] w-full bg-no-repeat bg-cover bg-fixed bg-bottom">
      <div className="w-full h-full bg-black/60">
        <Container>
          <div className="text-center text-white">
            <div className="py-30">
              <h1 className="text-3xl md:text-5xl font-semibold font-playfair">
                BOOK YOU TAXI CAV IN SYDNEY
              </h1>
              <p className="md:text-lg my-6">
                Welcome to Cambelltown Taxi Cabs, the most preferred choice for
                easy and affordable taxi maxi cab rides in Sydney. Get ready to
                make your travel experience memorable. Book your Fast Maxi Taxi
                ride today, where every trip combines speed, reliability and
                punctuality.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="tel:+1300450428"
                  className="px-6 py-3 bg-primary  text-white rounded-md font-semibold text-sm md:text-xl hover:bg-primary/80 hover:scale-105 hover:transition-all flex items-center gap-2"
                >
                  <FaPhoneVolume className="animate-bounce text-red-500 rotate-360" /> +1300 450 428
                </a>
                <Link to="/fleet" className="px-6 py-3 bg-primary  text-white rounded-md font-semibold text-sm md:text-xl hover:bg-primary/80 hover:scale-105 hover:transition-all">
                  Our Fleet
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text3xl md:text-4xl font-semibold font-playfair">
                AFFORDABLE GROUP TRAVEL WITH LARGE MAXI TAXI FOR ALL JOURNEYS
              </h2>
              <p className="md:text-lg my-6">
                Book your Sydney Maxi Cabs Taxi in advance for a smooth,
                affordable transportation experience with Cambelltown Taxi Cab Sydney.
                We take pride in being one of the most trusted names in maxi
                taxi sydney services in Sydney, offering 1-11 seat maxi cabs
                equipped with air-conditioning and clean, spacious interiors at
                affordable prices. If you choose a maxi taxi or cab, we will
                arrive at your doorstep and pick you up on time within 10
                minutes. We even arrange cruise transfers to make your holiday
                more enjoyable. Our spacious maxi cabs in Sydney can easily
                accommodate passengers and luggage. Your journey with us begins
                with a simple and efficient booking process, ensuring you reach
                your destination with ease and satisfaction.
              </p>

              {/* for tablet and laptop device */}
              <div className="grid-cols-4 pb-30 hidden md:grid">
                <div className="flex flex-col justify-end">
                  <img src={sedanCarImg} alt="" />
                  <p className="text-xl lg:2xl">Easy Sedan</p>
                </div>
                <div className="flex flex-col justify-end">
                  <img src={luxuryVehicleImg} alt="" />
                  <p className="text-xl lg:2xl">Luxury Vehicle</p>
                </div>
                <div className="flex flex-col justify-end">
                  <img src={suvWagonImg} alt="" />
                  <p className="text-xl lg:2xl">Suv or Wagon</p>
                </div>
                <div className="flex flex-col justify-end">
                  <img src={carnivalImg} alt="" />
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
