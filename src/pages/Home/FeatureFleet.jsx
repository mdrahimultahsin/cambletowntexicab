import {useEffect, useState} from "react";
import {Link} from "react-router";
import Container from "../../shared/Container";
import {IoPeopleSharp} from "react-icons/io5";
import {GiConcreteBag} from "react-icons/gi";
import ButtonPrimary from "../../shared/ButtonPrimary";
import Loading from "../../shared/Loading";

const FeatureFleet = () => {
  const [fleets, setFleets] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    fetch("/fleet.json")
      .then((res) => res.json())
      .then((data) => {
        setFleets(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  const colors = [
    "bg-amber-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-purple-400",
  ];
  return (
    <section className="mt-30">
      <Container>
        <h2 className="text-center text-primary text-2xl md:text-4xl font-playfair font-bold">
          Our Premium Fleet: Travel in Comfort and Style
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {loading ? (
            <Loading />
          ) : (
            fleets &&
            fleets.map((fleet, idx) => (
              <div
                key={fleet.id}
                className="bg-light rounded-xl shadow-md flex flex-col h-full relative overflow-hidden"
              >
                <div
                  className={` absolute w-full left-0 top-0 h-30  ${
                    colors[idx % colors.length]
                  }`}
                ></div>
                <img
                  className="max-w-50 z-10 mx-auto"
                  src={fleet.image}
                  alt=""
                />
                <h3
                  className={`text-xl font-semibold py-1 ${
                    colors[idx % colors.length]
                  } text-white text-center`}
                >
                  {fleet.name}
                </h3>
                <div className="flex flex-col h-full z-10  p-3 md:p-6 ">
                  <div className="flex items-center gap-3 text-primary text-lg mb-4">
                    <IoPeopleSharp />
                    <p>{fleet.passengerCapacity} Passengers</p>
                  </div>

                  <div className="flex items-center gap-3 text-primary text-lg mb-4">
                    <GiConcreteBag />
                    <p>{fleet.bagsCapacity} Bags</p>
                  </div>
                  <p className="text-accent text-xs md:text-base mb-4">
                    {fleet.description}
                  </p>

                  {/* Push button to bottom */}
                  <div className="mt-auto">
                    <Link to={`/book-a-taxi`}>
                      <ButtonPrimary className="text-base md:text-lg py-2 md:py-4 px-4 w-full">
                        Book Now
                      </ButtonPrimary>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

export default FeatureFleet;
