import React, { use } from "react";
import {Link} from "react-router";
import Container from "../../shared/Container";
import {IoPeopleSharp} from "react-icons/io5";
import {GiConcreteBag} from "react-icons/gi";
import ButtonPrimary from "../../shared/ButtonPrimary";

const FeatureFleet = ({fleetData}) => {
  const fleets = use(fleetData)
  return (
    <section>
      <Container>
        <h2 className="text-center text-primary text-4xl font-playfair font-bold">
          Our Fleets
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleets?.map((fleet) => (
            <div
  key={fleet.id}
  className="bg-light p-4 md:p-8 rounded-xl shadow-lg flex flex-col h-full"
>
  <img className="max-w-50" src={fleet.image} alt="" />
  <h3 className="text-xl font-semibold mb-5">{fleet.name}</h3>

  <div className="flex items-center gap-3 text-primary text-lg mb-4">
    <IoPeopleSharp />
    <p>{fleet.passengerCapacity} Passengers</p>
  </div>

  <div className="flex items-center gap-3 text-primary text-lg mb-4">
    <GiConcreteBag />
    <p>{fleet.bagsCapacity} Bags</p>
  </div>

  {/* Push button to bottom */}
  <div className="mt-auto">
    <Link to={`/services`}>
      <ButtonPrimary className="text-lg py-4 px-4 w-full">
        Book Now
      </ButtonPrimary>
    </Link>
  </div>
</div>

          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeatureFleet;
