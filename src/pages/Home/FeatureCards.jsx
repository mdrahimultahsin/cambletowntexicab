import {FaPlane, FaCar, FaCalendarAlt, FaTaxi} from "react-icons/fa";
import Container from "../../shared/Container";

const FeatureCards = () => {
  return (
        <section className="bg-secondary text-white py-16">
                <Container>
<div className=" flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0">
      {/* Airport */}
      <div className="flex flex-col items-center text-center">
        <FaPlane className="text-4xl mb-3" />
        <p className="text-lg">Airport Transportation</p>
      </div>

      <div className="hidden md:block w-px h-20 bg-white/30"></div>

      {/* Car Service */}
      <div className="flex flex-col items-center text-center">
        <FaCar className="text-4xl mb-3" />
        <p className="text-lg">Car Service</p>
      </div>

      <div className="hidden md:block w-px h-20 bg-white/30"></div>

      {/* Events */}
      <div className="flex flex-col items-center text-center">
        <FaCalendarAlt className="text-4xl mb-3" />
        <p className="text-lg">Events</p>
      </div>

      <div className="hidden md:block w-px h-20 bg-white/30"></div>

      {/* Taxi */}
      <div className="flex flex-col items-center text-center">
        <FaTaxi className="text-4xl mb-3" />
        <p className="text-lg">Taxi Service</p>
      </div>
    </div>
                </Container>
        </section>
    
  );
};

export default FeatureCards;
