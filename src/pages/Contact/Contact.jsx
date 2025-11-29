import Container from "../../shared/Container";
import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import ConnectWithUs from "./ConnectWithUs";
import GetInTouchForm from "./GetInTouchForm";
import Map from "./Map";
import {FaHandPointer} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";
import {Link} from "react-router";
import ButtonSecondary from "../../shared/ButtonSecondary";
import usePageTitle from "../../hooks/usePageTitle";


const Contact = () => {
  usePageTitle("Contact")
  return (
    <section>
      
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-0 md:gap-6">
            <div className="py-10 md:py-20 flex-1 text-center md:text-left ">
              <span className="text-2xl md:text-4xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl font-playfair">
                Contact Us
              </span>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs provides reliable and comfortable
                transportation with professional drivers, clean vehicles, and
                timely pickups. We proudly accept Cabcharge, making payments
                easy and convenient for both personal and corporate travelers.
                Whether you need airport transfers, local rides, or business
                travel support, our team is ready to assist you anytime. Reach
                out to us today — we’re committed to making your journey safe,
                smooth, and hassle-free.
              </p>
              <div className="flex py-4 gap-4 justify-center md:justify-start">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a href="tel:+611300450428" className="">
                  <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                    <IoCallSharp className="" /> 1300 450 428
                  </ButtonSecondary>
                </a>
              </div>
            </div>
            <div className="flex flex-1 items-center pb-10 md:pb-0">
              <img className="w-full" src={titleImg} alt="Campbelltown Taxi Cabs title img" />
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
