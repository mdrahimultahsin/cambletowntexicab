import React from "react";
import { FaCheck, FaShieldAlt, FaClock, FaDollarSign } from "react-icons/fa";

const Commitment = () => {
  return (
    <div className="pb-15">
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
            <span className="text-sm">
              Flight tracking for adjusted pickups
            </span>
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
            <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
            <span className="text-accent">
              Refunds processed within 3 to 10 business days
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
            <span className="text-accent">
              No hidden rebooking fees for wrong vehicle selection
            </span>
          </li>
        </ul>
      </div>

      {/* Trust Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
          Trusted Since 2022
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

      {/* Closing Statement */}
      <div className="text-center border-t pt-8">
        <p className="text-lg font-semibold text-secondary">
          When you book with Sky Maxi Cabs, you choose a Sydney company that
          values your time, safety, and comfort.
        </p>
      </div>
    </div>
  );
};

export default Commitment;
