
import Container from "./Container";
import ButtonPrimary from "./ButtonPrimary";
import {Link} from "react-router";

const CallToAction = () => {
  return (
    <div className="mt-15 bg-[url('/src/assets/ctabg.jpg')] w-full  bg-no-repeat bg-cover bg-fixed bg-bottom text-white py-8 md:py-10">
      <Container>
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-center gap-4  md:gap-15">
          <h2 className="font-playfair font-semibold text-base md:text-lg lg:text-2xl">
            We provide CampbellTown Taxi Cabs Sydney bookings for more than 50+ Suburbs.
          </h2>
          <Link to="/book-a-taxi">
            <ButtonPrimary className={`px-2! md:px-4! text-sm`}>Online Booking</ButtonPrimary>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
