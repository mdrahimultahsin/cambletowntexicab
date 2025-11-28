import { FaPlane,  FaCalendarAlt, FaTaxi, FaGift } from "react-icons/fa";
import Container from "../../shared/Container";

const FeatureCards = () => {
  return (
    <section className="mt-20 bg-secondary text-white py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">

          {/* Airport */}
          <div className="flex flex-col items-center text-center py-6 
            border-r border-b-2 border-white md:border-b-0 md:border-r-2">
            <FaPlane className="text-4xl mb-3" />
            <p className="text-lg">Airport Transportation</p>
          </div>

          {/* Car Service */}
          <div className="flex flex-col items-center text-center py-6 
            border-b-2 border-white md:border-b-0 md:border-r-2">
            <FaGift  className="text-4xl mb-3" />
            <p className="text-lg">Wedding Transfer</p>
          </div>

          {/* Events */}
          <div className="flex flex-col items-center text-center py-6 
            border-r border-white md:border-r-2">
            <FaCalendarAlt className="text-4xl mb-3" />
            <p className="text-lg">Events</p>
          </div>

          {/* Taxi */}
          <div className="flex flex-col items-center text-center py-6">
            <FaTaxi className="text-4xl mb-3" />
            <p className="text-lg">Taxi Service</p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FeatureCards;
