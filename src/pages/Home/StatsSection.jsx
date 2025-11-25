import {FaUsers, FaCarSide, FaSmile} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import CountUp from "react-countup";
import useInView from "../../utils/useInView";
import Container from "../../shared/Container";

const StatsSection = () => {
  const {ref, isInView} = useInView();

  const stats = [
    {
      id: 1,
      icon: <FaUsers className="text-4xl text-primary" />,
      value: 1000,
      suffix: "+",
      duration: 1.5,
      label: "Happy Customers",
    },
    {
      id: 2,
      icon: <FaCarSide className="text-4xl text-primary" />,
      value: 250000,
      suffix: "+",
      duration: 3.5,
      label: "Rides Completed",
    },
    {
      id: 3,
      icon: <FaLocationDot className="text-4xl text-primary" />,
      value: 50,
      suffix: "+",
      duration: 2,
      label: "Suburbs Covered",
    },
    {
      id: 4,
      icon: <FaSmile className="text-4xl text-primary" />,
      value: 99,
      suffix: "%",
      duration: 2.8,
      label: "Customer Satisfaction",
    },
  ];

  return (
    <div ref={ref} className="mt-10 md:mt-20 py-16 bg-white">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-primary font-playfair ">
            Our Achievement
          </h2>
          <p className="text-accent mt-2 ">
            Thousands of customers trust our premium taxi services every day.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-light border-b-5 border-primary shadow-md rounded-xl p-8 hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>

              <h3 className="text-3xl font-bold text-secondary">
                {isInView ? (
                  <CountUp
                    end={item.value}
                    duration={item.duration}
                    separator=","
                  />
                ) : (
                  0
                )}
                {item.suffix}
              </h3>

              <p className="text-accent mt-2 text-sm font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StatsSection;
