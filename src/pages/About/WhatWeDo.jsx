import React from "react";
import {
  FaPlane,
  FaShip,
  FaUsers,
  FaBriefcase,
  FaBaby,
  FaHeart,
  FaWheelchair,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Sydney Airport Transfers",
    label: "both international and domestic terminals.",
    Icon: FaPlane,
  },
  {
    id: 2,
    title: "Cruise Transfer",
    label: "to White Bay and Circular Quay.",
    Icon: FaShip,
  },
  {
    id: 3,
    title: "Group Transfers",
    label: " for events, concerts, sports, and social trips.",
    Icon: FaUsers,
  },
  {
    id: 4,
    title: "Corporate Transfers",
    label: " for meetings, conferences, and business events.",
    Icon: FaBriefcase,
  },
  {
    id: 5,
    title: "Baby Seat",
    label:
      " Taxis with rear facing capsules, forward facing seats, and boosters.",
    Icon: FaBaby,
  },
  {
    id: 6,
    title: "Wedding and Event Transfers",
    label: " for families and guests.",
    Icon: FaHeart,
  },
  {
    id: 7,
    title: "Wheelchair Accessible",
    label: " Taxis with ramps and extra space.",
    Icon: FaWheelchair,
  },
];

const WhatWeDo = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="font-playfair text-primary font-semibold text-5xl text-center">
          What We Do
        </h2>
        <p className="text-accent max-w-3xl mx-auto mt-5 text-lg">
          We provide door to door transport across Sydney. Our main services
          are:
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <div className=" p-6 rounded-lg shadow-sm hover:shadow-lg transition duration-200">
            <div className="flex items-center">
              <div className="bg-light p-3 rounded-lg mr-4">
                <service.Icon></service.Icon>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;

<section className="py-15">
  <div className="max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Services List */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">✈️</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Sydney Airport Transfers
              </h3>
              <p className="text-gray-600">
                Both international and domestic terminals
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">🚢</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Cruise Transfers
              </h3>
              <p className="text-gray-600">To White Bay and Circular Quay</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">👥</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Group Transfers
              </h3>
              <p className="text-gray-600">
                For events, concerts, sports, and social trips
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">💼</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Corporate Transfers
              </h3>
              <p className="text-gray-600">
                For meetings, conferences, and business events
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">👶</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Baby Seat Taxis
              </h3>
              <p className="text-gray-600">
                With rear facing capsules, forward facing seats, and boosters
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">💒</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Wedding and Event Transfers
              </h3>
              <p className="text-gray-600">For families and guests</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <span className="text-2xl">♿</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Wheelchair Accessible Taxis
              </h3>
              <p className="text-gray-600">With ramps and extra space</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Our Service Features</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-white">✓</span>
              </div>
              <span className="font-medium">24/7 Operation</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-white">✓</span>
              </div>
              <span className="font-medium">Door to Door Service</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-white">✓</span>
              </div>
              <span className="font-medium">Fixed Fare System</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-white">✓</span>
              </div>
              <span className="font-medium">Includes Tolls & GST</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-white">✓</span>
              </div>
              <span className="font-medium">Price Known Before Travel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
