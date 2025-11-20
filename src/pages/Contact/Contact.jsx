import React from "react";
import Container from "../../shared/Container";
import titleImg from "../../assets/fleet-header-img.png";
import ConnectWithUs from "./ConnectWithUs";
import GetInTouchForm from "./GetInTouchForm";

const Contact = () => {
  return (
    <section className="pb-30">
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-15 md:py-30 flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl">
                Contact Us
              </span>
            </div>
            <div className="flex flex-1 items-center pb-10 md:pb-0">
              <img src={titleImg} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
                {/* get in touch form */}
          <div className="flex-1 ">
                <GetInTouchForm/>
          </div>

          {/* Contact with us section */}
          <div className="flex-1 ">
                <ConnectWithUs/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
