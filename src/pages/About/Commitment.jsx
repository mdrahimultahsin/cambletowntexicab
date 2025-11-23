
import {FaCheck, FaShieldAlt, FaClock, FaDollarSign, FaPhoneAlt, FaAward, FaUsers, FaStar} from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { useNavigate } from "react-router";
import ButtonSecondary from "../../shared/ButtonSecondary";

const Commitment = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-30">
      {/* Main Commitment */}
      <div className="text-center md:mb-10">
        <h1 className="font-playfair text-primary font-semibold text-4xl md:text-5xl text-center">
          Our Commitment
        </h1>
        <p className="text-accent max-w-3xl mx-auto mt-5 text-sm md:text-lg">
          CambellTown Taxi Cabs is committed to reliability and affordability. We aim to
          make every trip smooth from booking to drop off.
        </p>
      </div>
     

      {/* Policies */}
<div className="bg-light p-8 md:p-12 rounded-2xl my-12 border border-blue-200 relative overflow-hidden">
  
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
    {/* Left Side - Main Content */}
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <FaCheck className="text-white text-xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Fair & Flexible Policies
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          We understand travel plans can change. Our customer-first approach ensures you're always in control.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
              <FaCheck className="text-green-600 text-sm" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Quick Refunds</h4>
              <p className="text-sm text-gray-600">Processed within 3-10 business days</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
              <FaCheck className="text-green-600 text-sm" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">No Hidden Fees</h4>
              <p className="text-sm text-gray-600">Free rebooking for wrong vehicle selection</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
              <FaCheck className="text-green-600 text-sm" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Flexible Rescheduling</h4>
              <p className="text-sm text-gray-600">Change plans up to 2 hours before pickup</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
              <FaCheck className="text-green-600 text-sm" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">24/7 Support</h4>
              <p className="text-sm text-gray-600">Dedicated customer support always available</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
              <FaCheck className="text-green-600 text-sm" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Safety First</h4>
              <p className="text-sm text-gray-600">Vehicles sanitized & regularly inspected</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
              <FaCheck className="text-green-600 text-sm" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Price Match</h4>
              <p className="text-sm text-gray-600">Best rates guaranteed for your journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Side - Additional Benefits */}
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <FaShieldAlt className="text-blue-600" />
          </div>
          Peace of Mind Guarantee
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>100% satisfaction guarantee</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Professional licensed drivers</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Real-time ride tracking</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Instant booking confirmation</span>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-primary to-[#003E60] text-white rounded-xl p-3 md:p-6 shadow-md">
        <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
        <div className="space-y-2 text-blue-100">
          <p className="flex items-center gap-2">
            <FaStar className="text-yellow-300" />
            <span>4.9/5 customer rating</span>
          </p>
          <p className="flex items-center gap-2">
            <FaUsers className="text-blue-200" />
            <span>10,000+ happy customers</span>
          </p>
          <p className="flex items-center gap-2">
            <FaAward className="text-blue-200" />
            <span>Award-winning service</span>
          </p>
        </div>
        <ButtonSecondary onClick={()=>navigate("/book-a-taxi")} className="w-full mt-4">
          Book A Taxi
        </ButtonSecondary>
      </div>
    </div>
  </div>


</div>


      {/* Trust Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
          Trusted Since 2010
        </h2>
        <p className="text-lg font-medium text-primary mb-6">
          Thousands of transfers completed
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 shadow-md rounded-lg">
            <FaShieldAlt className="text-2xl text-primary mx-auto mb-2" />
            <p className="text-sm text-accent">
              Families trust us with their children's safety
            </p>
          </div>
          <div className="text-center p-4 shadow-md rounded-lg">
            <FaClock className="text-2xl text-primary mx-auto mb-2" />
            <p className="text-sm text-accent">
              Corporate teams rely on us for punctuality
            </p>
          </div>
          <div className="text-center p-4 shadow-md rounded-lg">
            <FaDollarSign className="text-2xl text-primary mx-auto mb-2" />
            <p className="text-sm text-accent">
              ourists rate us highly for convenience and fair pricing
            </p>
          </div>
        </div>
      </div>
      {/* Call to action */}
      <div className="text-center">
        <div className="bg-linear-to-r from-primary to-[#003E60] text-white rounded-xl p-3 md:p-6 shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
            Need a Ride Right Now?
          </h3>
          <p className="text-sm md:text-lg mb-6 md:font-semibold">
            Instant booking | 24/7 availability | Fixed prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-secondary text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-xs md:text-base">
             <a
            className="flex items-center gap-2 cursor-pointer"
            href="tel:+1300450428"
          >

              <FaPhoneAlt className="text-sm md:text-lg" />
              Call: 1300 123 456
          </a>
            </button>
            <button onClick={()=>navigate("/services")} className="border-2 border-white text-white px-3 md:px-8 py-1 md:py-3 text-sm md:text-base rounded-full font-semibold hover:bg-secondary/80 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer">
              <IoCarSport className="text-sm md:text-lg" />
              Book Online Now
            </button>
          </div>
          <p className="text-sm mt-4 text-white">
            Average wait time: 8 minutes • No Extra pricing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
