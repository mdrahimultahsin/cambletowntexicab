import { Link } from "react-router";
import { FaPlane, FaCar, FaShip } from "react-icons/fa";

const quickLinks = [
  {
    id: 1,
    label: "Airport Transfers",
    icon: <FaPlane />,
    to: "/services/airport-transfers", // route or use #id for scrolling
  },
  {
    id: 2,
    label: "Wedding Transfers",
    icon: <FaCar />,
    to: "/services/wedding-transfers",
  },
  {
    id: 3,
    label: "Cruise Transfers",
    icon: <FaShip />,
    to: "/services/cruise-transfers",
  },
];

const QuickLinks = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Quick Links</h2>

        <div className="flex flex-col  gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="flex items-center gap-3 bg-light p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow w-full"
            >
              <div className="text-blue-500 text-4xl">{link.icon}</div>
              <span className="font-semibold text-gray-800">{link.label}</span>
            </Link>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default QuickLinks;
