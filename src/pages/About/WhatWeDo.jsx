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
          <p className="text-accent mt-4 max-w-2xl mx-auto text-sm md:text-lg">
            We provide reliable, safe, and comfortable transportation across Sydney.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white group p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary text-3xl bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition">
                    {item.label}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
