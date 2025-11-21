import { FaShieldAlt, FaCarSide, FaClock, FaDollarSign, FaClipboardCheck, FaRoute } from "react-icons/fa";
import Container from "../../shared/Container";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaClipboardCheck className="text-2xl" />,
      title: "Reliability Guaranteed",
      desc: "Your ride arrives on time, every time. We track your schedule to ensure a smooth pickup and drop-off experience."
    },
    {
      icon: <FaCarSide className="text-2xl" />,
      title: "Premium & Clean Fleet",
      desc: "Ride in comfort with our well-maintained sedans, SUVs, and maxi cabs — perfect for groups, families, and airport transfers."
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Safe & Secure Rides",
      desc: "All drivers are trained, background-checked, and committed to providing a safe travel experience."
    },
    {
      icon: <FaDollarSign className="text-2xl" />,
      title: "Affordable Transparent Pricing",
      desc: "Competitive rates with no hidden fees. Get premium service without paying premium prices."
    },
    {
      icon: <FaRoute className="text-2xl" />,
      title: "Flexible Travel Options",
      desc: "Choose the perfect vehicle for your trip — from single-passenger cabs to spacious maxi taxis."
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "24/7 Availability",
      desc: "Day or night, we're ready when you are. Book anytime and travel with confidence."
    }
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
      
          <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience comfort, reliability, and professional service for every ride. 
            Whether it's an airport transfer, a family trip, or daily travel — we deliver the perfect ride every time.
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
                <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-primary to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
          
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-4 relative group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed relative">
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