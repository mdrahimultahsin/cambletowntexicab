import React from "react";
import Container from "../../shared/Container";
import titleImg from "../../assets/fleet-header-img.png";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  const features = [
    {
      icon: "🚗",
      title: "Reliable Service",
      description: "Punctual and dependable transportation you can count on",
    },
    {
      icon: "⭐",
      title: "Professional Drivers",
      description: "Licensed, experienced, and customer-focused professionals",
    },
    {
      icon: "💝",
      title: "Customer Care",
      description: "Your safety and satisfaction are our top priorities",
    },
  ];

  const fleetTypes = [
    {
      name: "Sedans",
      description: "Comfortable 4-seater cars for small groups and individuals",
      capacity: "Up to 4 passengers",
    },
    {
      name: "SUVs",
      description: "Spacious vehicles perfect for families with luggage",
      capacity: "Up to 6 passengers",
    },
    {
      name: "Maxi Vans",
      description: "Large vehicles ideal for groups and airport transfers",
      capacity: "Up to 11 passengers",
    },
    {
      name: "Wheelchair Taxis",
      description: "Fully accessible vehicles with proper safety features",
      capacity: "Wheelchair accessible",
    },
  ];

  const serviceAreas = [
    "Sydney CBD",
    "Western Suburbs",
    "Northern Beaches",
    "Eastern Suburbs",
    "Southern Suburbs",
    "Airport Transfers",
    "Cruise Terminals",
  ];

  const safetyFeatures = [
    "Regular vehicle maintenance",
    "GPS tracking",
    "Professional licensed drivers",
    "24/7 customer support",
    "Clean and sanitized vehicles",
    "Safety inspections",
  ];
  return (
    <div className="pb-30">
      {/* hero section */}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-15 md:py-30  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl">
                About Us
              </span>
              <p className="mt-8 text-sm md:text-md">
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

      <div>
        <Container>
          <WhoWeAre />
          <WhatWeDo />
          <WhyChooseUs />
        </Container>
      </div>
    </div>
  );
};

export default About;
