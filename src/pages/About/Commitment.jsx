
import {FaCheck, FaShieldAlt, FaClock, FaDollarSign, FaPhoneAlt} from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { useNavigate } from "react-router";

const Commitment = () => {
  const navigate = useNavigate()
  return (
    <div className="">
      {/* Main Commitment */}
      <div className="text-center md:mb-10">
        <h1 className="font-playfair text-primary font-semibold text-4xl md:text-5xl text-center">
          Our Commitment
        </h1>
        <p className="text-accent max-w-3xl mx-auto mt-5 text-sm md:text-lg">
          Sky Maxi Cabs is committed to reliability and affordability. We aim to
          make every trip smooth from booking to drop off.
        </p>
      </div>
      <div className="flex flex-wrap md:justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded">
          <FaCheck className="text-primary" />
          <span className="text-sm">SMS or email confirmations</span>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded">
          <FaCheck className="text-primary" />
          <span className="text-sm">Flight tracking for adjusted pickups</span>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded">
          <FaCheck className="text-primary" />
          <span className="text-sm">
            Simple payments: card, Apple Pay, Google Pay, and cash
          </span>
        </div>
      </div>

      {/* Policies */}
      <div className="bg-light p-6 rounded-lg my-8">
        <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-3">
          Fair & Flexible
        </h2>
        <p className="text-accent mb-4">
          We know travel plans change. Our refund policy is clear and fair.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-1 shrink-0" />
            <span className="text-accent">
              Refunds processed within 3 to 10 business days
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-1 shrink-0" />
            <span className="text-accent">
              No hidden rebooking fees for wrong vehicle selection
            </span>
          </li>
        </ul>
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
