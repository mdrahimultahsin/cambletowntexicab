import React from "react";

const features = [
  {
    title: "Established in 2022",
    description: "Sydney owned and operated with a commitment to quality service.",
  },
  {
    title: "Local Professional Drivers",
    description: "All drivers are locally based and trained in safety and customer service.",
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock transportation across all Sydney suburbs.",
  },
  {
    title: "Diverse Fleet Options",
    description: "Sedans, SUVs, maxi vans, luxury vehicles, and wheelchair-accessible transport.",
  },
  {
    title: "Top-Rated Service",
    description: "Hundreds of verified five-star reviews on Google from satisfied customers.",
  },
  {
    title: "Safe & Comfortable Rides",
    description: "Every vehicle is regularly maintained for maximum comfort and safety.",
  }
];


const WhyChooseUs = () => {
  return (
    <section className="py-15">
      <div className="text-center mb-5 md:mb-10">
        <h2 className="font-playfair text-primary font-semibold text-4xl md:text-5xl text-center">
          Why Choose Us?
        </h2>
        <p className="text-accent max-w-3xl mx-auto mt-5 text-sm md:text-lg">
          We're committed to providing the best transportation experience
        </p>
      </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className=" p-3 md:p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition duration-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-secondary text-base md:text-xl mb-1 md:mb-3">{feature.title}</h3>
              <p className="text-accent leading-relaxed text-xs md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default WhyChooseUs;