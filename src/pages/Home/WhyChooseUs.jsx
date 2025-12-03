import {
  FaShieldAlt,
  FaCarSide,
  FaClock,
  FaDollarSign,
  FaClipboardCheck,
  FaRoute,
  FaHeadset,
  FaLeaf,
} from "react-icons/fa";
import Container from "../../shared/Container";
import { MdAirlineSeatReclineExtra, MdOutlinePayment } from "react-icons/md";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaClipboardCheck className="text-2xl" />,
      title: "Reliability Guaranteed",
      desc: "We pride ourselves on punctuality. Campbelltown Taxi Cabs guarantees your ride arrives on time, every time. We track your schedule to ensure smooth pickups and drop-offs, whether for airport trips or business meetings. With us, you'll never miss a moment.",
    },
    {
      icon: <FaCarSide className="text-2xl" />,
      title: "Premium & Clean Fleet",
      desc: "Travel in luxury with our fleet of top-quality vehicles, including well-maintained sedans, luxury SUVs, and maxi cabs. We provide a comfortable, spotless ride, perfect for any occasion—whether it's a corporate event or a family outing.",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Local Expertise",
      desc: "Our drivers know Campbelltown and the surrounding areas inside out. We'll get you where you need to go, quickly and efficiently, with the best routes in mind. With years of local knowledge, we always choose the best routes to avoid traffic, ensuring you arrive on time and stress-free.",
    },
    {
      icon: <FaDollarSign className="text-2xl" />,
      title: "Affordable Transparent Pricing",
      desc: "Enjoy the luxury you deserve without the premium price tag. We offer competitive rates with no hidden fees. Our taxi service Campbelltown ensures full transparency, so you can relax knowing you're getting the best value for your ride.",
    },
    {
      icon: <FaRoute className="text-2xl" />,
      title: "Safe & Secure Rides",
      desc: "Your safety is our top priority. All our drivers are trained, background-checked, and committed to providing a secure, comfortable ride. Whether you're traveling to Sydney Airport or a local event, we ensure your peace of mind from start to finish.",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Flexible Travel Options",
      desc: "We offer tailored travel solutions to meet your needs. From single-passenger taxis to spacious maxi cabs for large groups, our fleet has you covered. Whether you're heading to a corporate meeting or a family gathering, we provide the perfect ride for every occasion.",
    },
    {
      icon: <MdAirlineSeatReclineExtra className="text-2xl" />,
      title: "Comfort at Every Turn",
      desc: "Our luxury taxis ensure you travel in comfort, with features like air conditioning, ample legroom, and a smooth ride, all at affordable rates. Sit back, relax, and let us take you where you need to go in style.",
    },
    {
      icon: <MdOutlinePayment className="text-2xl" />,
      title: "We Accept CabCharge",
      desc: "The Cabcharge Taxi Service by Campbelltown Taxi Cabs offers a reliable and hassle-free travel experience. Passengers can enjoy convenient Cabcharge payment options, professional drivers, clean vehicles, and timely pickups, making every journey comfortable, secure, and suitable for both personal and business travel needs.",
    },
    {
      icon: <FaHeadset  className="text-2xl" />,
      title: "24/7 Availabilty",
      desc: "Whether it's a last-minute airport transfer or a late-night ride home, we're always available. Our taxi service Campbelltown NSW operates around the clock, so you can rely on us for safe, reliable transport-whenever you need it.",
    },
  ];

  return (
    <section className="relative bg-linear-to-br from-secondary to-secondary text-white py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title">
            Why Choose Campbelltown Taxi Cabs?
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Campbelltown Taxi Cabs, we make every ride a premium experience.
            Whether you're heading to Sydney Airport or traveling locally, our
            luxury taxi Campbelltown service ensures comfort, safety, and
            reliability. We understand the importance of punctuality, so we go
            the extra mile to ensure you arrive on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-primary/30 hover:-translate-y-2"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-primary to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base md:text-xl font-bold mb-4 relative group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed relative">
                {feature.desc}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-linear-to-br from-primary to-blue-500 group-hover:w-3/4 transition-all duration-500 rounded-t-full"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
