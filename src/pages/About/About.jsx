import React from "react";
import Container from "../../shared/Container";
import titleImg from "../../assets/fleet-header-img.png";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import Commitment from "./Commitment";
import WhyChooseUs from "../Home/WhyChooseUs";
import AboutChooseUs from "./AboutChooseUs";

const About = () => {

  return (
    <div className="pb-15">
      {/* hero section */}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-15 md:py-30  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl">
                About Us
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

      <div>
        <Container>
          <WhoWeAre />
        </Container>
          
          <WhatWeDo />
        <Container>
        
          <AboutChooseUs/>
        
        </Container>

          <Commitment/>
      </div>
    </div>
  );
};

export default About;
