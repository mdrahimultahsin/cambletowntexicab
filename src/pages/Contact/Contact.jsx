import Container from "../../shared/Container";
import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import ConnectWithUs from "./ConnectWithUs";
import GetInTouchForm from "./GetInTouchForm";
import Map from "./Map";
import {FaHandPointer} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";
import {Link} from "react-router";
import ButtonSecondary from "../../shared/ButtonSecondary";
import useSEO from "../../hooks/useSEO";

const Contact = () => {
  return (
    <section>
      {useSEO({
        title: "Contact Us - Campbelltown Taxi Cabs",
        description:
          "Get in touch with Campbelltown Taxi Cabs for premium, reliable taxi services in Campbelltown NSW. We offer fast, safe, and affordable transport options.",
        keywords:
          "campbelltown taxi cabs, taxi campbelltown,taxi campbelltown nsw, campbelltown taxi,campbelltown taxis,taxi service campbelltown nsw,taxis campbelltown,luxury taxi campbelltown,taxi service campbelltown",
        canonical: "https://campbelltowntaxicabs.com.au/contact",
      })}
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-0 md:gap-6">
            <div className="py-10 md:py-20 flex-1 text-center md:text-left ">
              <h2 className="section-hero-title">Contact Campbelltown Taxi Cabs</h2>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs provides safe and reliable transport
                across Campbelltown, Macarthur, and Sydney. Our licensed drivers
                offer clean cars, fast pickups, and friendly service. We handle
                airport transfers, local trips, and corporate travel. We accept
                cards, cash, and Cabcharge. Contact our 24/7 team for trusted,
                professional taxi support.
              </p>
              <div className="flex py-4 gap-4 justify-center md:justify-start">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a href="tel:1300450428" className="">
                  <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                    <IoCallSharp className="" /> 1300 450 428
                  </ButtonSecondary>
                </a>
              </div>
            </div>
            <div className="flex flex-1 items-center pb-10 md:pb-0">
              <img
                className="w-full"
                src={titleImg}
                alt="Campbelltown Taxi Cabs title img"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {/* get in touch form */}
          <div className="flex-1 ">
            <GetInTouchForm />
          </div>

          {/* Contact with us section */}
          <div className="flex-1 ">
            <ConnectWithUs />
          </div>
        </div>
        <div>
          <Map />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
