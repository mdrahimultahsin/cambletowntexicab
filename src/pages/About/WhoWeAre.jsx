import React from "react";
import about2 from "../../assets/about2.png";

const WhoWeAre = () => {
  return (
    <section className="py-15">
      <div className="text-center mb-5 md:mb-10">
        <h2 className="section-title">Who We Are</h2>
      </div>

      <div className="grid md:grid-cols-2  gap-8 items-center">
        <div className="flex-col space-y-4">
          <div className="bg-blue-50 p-3 md:p-6 rounded-lg border-l-4 border-primary">
            <p className="text-primary text-xs md:text-base">
              Campbelltown Taxi Cabs was started to fill a gap in the Sydney
              transport market. Passengers wanted affordable group transport
              with professional drivers and simple booking. We built a fleet
              that includes sedans, SUVs, 7 seat maxi vans, 11 seat maxi vans,
              luxury vehicles, and wheelchair accessible taxis. Each vehicle is
              maintained daily and inspected to meet NSW transport regulations.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
            <p className="text-primary text-xs md:text-base">
              Our mission is to provide safe, reliable, and affordable maxi cab
              services for every customer.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
            <p className="text-primary text-xs md:text-base">
              Our vision is to be Sydney’s most trusted name for airport,
              cruise, and group transfers.
            </p>
          </div>
        </div>

        <div className="hidden md:inline-block rounded-2xl p-8 text-white text-center">
          <img src={about2} alt="Campbelltown Taxi Cabs" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
