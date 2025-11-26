import { IoCallSharp } from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import Container from "../../shared/Container";
import { FaHandPointer } from "react-icons/fa6";
import titleImg from "../../assets/fleet-header-img.png"
import { Link } from "react-router";
const TermsAndCondition = () => {
        return (
                <div>
                       <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl font-playfair">
                Terms and Condition
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
              <div className="flex py-4 gap-4 justify-center md:justify-start">
                <Link to="/book-a-taxi" className=" ">
                  <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                    <FaHandPointer />
                    Book Online
                  </ButtonSecondary>
                </Link>
                <a href="tel:+1300450428" className="">
                  <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                    <IoCallSharp className="" /> 1300 450 428
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
                </div>
        );
};

export default TermsAndCondition;