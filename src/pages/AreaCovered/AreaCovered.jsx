import React from "react";
import Container from "../../shared/Container";
import { FaMapMarkerAlt, FaTaxi, FaStar, FaPhoneAlt } from "react-icons/fa";
import { IoCarSport, IoLocation, IoTime } from "react-icons/io5";
import titleImg from "../../assets/fleet-header-img.png";
import QuickLinks from "./QuickLinks";

const AreaCovered = () => {
  const serviceAreas = [
    "Campbelltown", "Macarthur", "Menangle", "Leumeah", "Raby",
    "St Andrew's", "St Helen's park", "Ruse", "Minto", "Ingleburn",
    "Glenfield", "Camden", "Camden south", "Oran park", "Gregory hills",
    "Eagle vale", "Elderslie", "Spring farm", "Cobbity", "Cowdor",
    "Denham court", "Edmondson park", "Austral", "Liverpool", "Picton",
    "Thilmere", "Bargo", "Bowral", "Goulburn","Airds","Gledswood Hills","Leppington"
  ];

  const serviceFeatures = [
    {
      icon: IoTime,
      title: "24/7 Service",
      description: "Round the clock availability"
    },
    {
      icon: FaStar,
      title: "Rated 4.9/5",
      description: "By 2000+ customers"
    },
    {
      icon: IoCarSport,
      title: "Modern Fleet",
      description: "Clean & comfortable vehicles"
    },
    {
      icon: FaPhoneAlt,
      title: "Instant Booking",
      description: "Quick & easy reservations"
    }
  ];

  const popularRoutes = [
    { from: "Campbelltown", to: "Sydney Airport", time: "45 min" },
    { from: "Camden", to: "Liverpool", time: "25 min" },
    { from: "Bowral", to: "Campbelltown", time: "35 min" },
    { from: "Oran Park", to: "Parramatta", time: "40 min" }
  ];

  return (
    <div className="pb-15">
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-15 md:py-30  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl">
                Covered Area
              </span>
              <p className="mt-8 text-sm md:text-base">
                Silver Cabs is a Sydney based maxi cab service established in
                2022. We provide affordable, reliable, and safe transport for
                families, groups, and business travelers. Our fleet includes
                sedans, SUVs, maxi vans, luxury cars, and wheelchair accessible
                taxis. We operate 24/7 across all Sydney suburbs and offer
                airport transfers, cruise transfers, corporate trips, and baby
                seat taxis.
              </p>
            </div>
            <div className="flex flex-1 items-center pb-10 md:pb-0">
              <img src={titleImg} alt="" />
            </div>
          </div>
        </Container>
      </div>
      
      <Container>
        <div className="mx-auto pt-15">
          {/* Header Section */}
          <div className="text-center mb-5 md:mb-10">
            <h2 className="font-playfair text-primary font-semibold text-3xl md:text-5xl text-center">
              Serving Macarthur Region
            </h2>
            <p className="leading-relaxed text-accent max-w-3xl mx-auto mt-5 text-sm md:text-lg">
              Your trusted taxi service connecting <span className="text-primary font-semibold">{serviceAreas.length}+ locations</span> across Greater Sydney with reliable, affordable, and comfortable transportation solutions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-15 md:mb-10 text-center md:text-left">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="backdrop-blur-sm rounded-xl p-3 md:p-6 border shadow-sm bg-primary/5 border-primary/10 hover:bg-primary/15 transition-all duration-300 group">
                <div className="w-10 md:w-14 h-10 md:h-14 bg-linear-to-r from-[#04A9E9] to-[#003E60] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform  mx-auto md:mx-0">
                  <feature.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-secondary font-bold text-sm md:text-lg mb-2">{feature.title}</h3>
                <p className="text-accent text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6 mb-5 md:mb-10">
            {/* Service Areas Card */}
            <div className="lg:col-span-2 backdrop-blur-sm rounded-xl p-3 md:p-6 border shadow-sm bg-primary/5 border-primary/10">
              <div className="flex items-center gap-3 mb-4 md:mb-8">
                <div className="w-10 md:w-14 h-10 md:h-14 bg-linear-to-r from-[#04A9E9] to-[#003E60] rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="text-xl md:text-2xl text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-secondary">All Service Areas</h2>
                  <p className="text-accent text-xs md:text-base">Complete coverage across the region</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className="bg-primary/5 hover:bg-primary/10 border border-primary/10 rounded-xl p-4 text-center transition-all duration-300 group-hover:scale-105 group-hover:border-primary/20">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-[#003E60] transition-colors">
                        <FaTaxi className="text-white text-sm" />
                      </div>
                      <span className="text-secondary font-medium text-sm">{area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Routes & Info Card */}
            <div className="space-y-6">
              {/* Popular Routes */}
              <div className="backdrop-blur-sm rounded-xl p-6 border shadow-sm bg-primary/5 border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <IoCarSport className="text-primary" />
                  Popular Routes
                </h3>
                <div className="space-y-0 md:space-y-4">
                  {popularRoutes.map((route, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-secondary font-semibold text-sm">{route.from}</span>
                        <span className="text-primary text-xs bg-yellow-400/10 px-2 py-1 rounded-full">{route.time}</span>
                      </div>
                      <div className="text-accent text-xs">→ to {route.to}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-xl p-3 md:p-6">
                <h3 className="font-bold text-lg mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base md:font-semibold">Response Time</span>
                    <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Under 10min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base md:font-semibold">Fleet Size</span>
                    <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">50+ Vehicles</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base md:font-semibold">Experience</span>
                    <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Since 2022</span>
                  </div>
                </div>
              </div>
              <QuickLinks/>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60] text-white rounded-xl p-3 md:p-6 shadow-md">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                Need a Ride Right Now?
              </h3>
              <p className="text-sm md:text-lg mb-6 md:font-semibold">
                Instant booking | 24/7 availability | Fixed prices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-secondary text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-xs md:text-base">
                  <FaPhoneAlt className="text-sm md:text-lg" />
                  Call: 1300 123 456
                </button>
                <button className="border-2 border-white text-white px-3 md:px-8 py-1 md:py-3 text-sm md:text-base rounded-full font-semibold hover:bg-secondary/80 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <IoCarSport className="text-sm md:text-lg" />
                  Book Online Now
                </button>
              </div>
              <p className="text-sm mt-4 text-white">
                Average wait time: 8 minutes • No surge pricing
              </p>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default AreaCovered;