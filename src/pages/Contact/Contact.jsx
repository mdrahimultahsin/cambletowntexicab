import React from "react";
import Container from "../../shared/Container";
import titleImg from "../../assets/fleet-header-img.png";
import ConnectWithUs from "./ConnectWithUs";
import GetInTouchForm from "./GetInTouchForm";
import Map from "./Map";
import { FaHandPointer } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router";
import ButtonSecondary from "../../shared/ButtonSecondary";

const Contact = () => {
  return (
    <section className="pb-30">
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-10 md:py-20 flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl">
                Contact Us
              </span>
              <p className="mt-8 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, magni ipsa, saepe officiis fugit maiores ratione, quo asperiores dolorem sapiente rem libero iure cumque nam. Fuga eos aspernatur quae culpa?</p>
              <div className="flex py-4 gap-4 justify-center md:justify-start">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a
                  href="tel:+1300450428"
                  className=""
                >
                  <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                    <IoCallSharp className="" /> +1300 450 428
                  </ButtonSecondary>
                </a>
              </div>
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
        <div>
                <Map/>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
