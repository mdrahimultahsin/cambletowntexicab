import React from "react";
import { Link } from "react-router";
import {
  FaPlane,
  FaBaby,
  FaWheelchair,
  FaBriefcase,
  FaShip,
  FaGift,
  FaStar,
  FaBox,
  FaUsers,
} from "react-icons/fa";
import Container from "../../shared/Container";

const services = [
  {
    id: 1,
    label: "Book Taxi Sydney Airport",
    pathname: "/services/book-text-sydney-airport",
    icon: <FaPlane />,
    desc: "Quick rides to Sydney airport.",
  },
  {
    id: 2,
    label: "Baby Seat Taxi Sydney",
    pathname: "/services/baby-seat-texi-sydney",
    icon: <FaBaby />,
    desc: "Family-friendly taxi service.",
  },
  {
    id: 3,
    label: "Wheelchair Accessible Taxi",
    pathname: "/services/wheelchair-accessible-taxi",
    icon: <FaWheelchair />,
    desc: "Accessible taxis for all passengers.",
  },
  {
    id: 4,
    label: "Corporate Transport Services",
    pathname: "/services/corporate-transport-services",
    icon: <FaBriefcase />,
    desc: "Professional transport for corporate clients.",
  },
  {
    id: 5,
    label: "Cruise Terminal Transfer",
    pathname: "/services/cruise-terminal-transfer",
    icon: <FaShip />,
    desc: "Timely transfers to cruise terminals.",
  },
  {
    id: 6,
    label: "Wedding Transfer",
    pathname: "/services/wedding-transfer",
    icon: <FaGift />,
    desc: "Comfortable wedding day transportation.",
  },
  {
    id: 7,
    label: "Event Transfer",
    pathname: "/services/event-transfer",
    icon: <FaStar />,
    desc: "Convenient transfers for events.",
  },
  {
    id: 8,
    label: "Parcel Delivery",
    pathname: "/services/percel-transfer",
    icon: <FaBox />,
    desc: "Fast parcel pickup and delivery.",
  },
  {
    id: 9,
    label: "Maxi Taxi Service",
    pathname: "/services/airport-shuttle",
    icon: <FaUsers />,
    desc: "Large group taxi service.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-16 bg-secondary text-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-primary font-bold text-4xl md:text-5xl">
            What We Do
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg">
            We provide reliable, safe, and comfortable transportation across Sydney.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service,index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-primary/30 hover:-translate-y-2"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-2xl bg-linear-to-br from-primary to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
          
              </div>
              
              {/* Content */}
              <h3 className="text-base md:text-xl font-bold mb-4 relative group-hover:text-primary transition-colors duration-300">
                {service.label}
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed relative">
                {service.desc}
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

export default WhatWeDo;
