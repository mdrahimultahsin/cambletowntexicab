import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../shared/Container";
import ButtonSecondary from "../../shared/ButtonSecondary";
import { FaHandPointer } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import titleImg from "../../assets/fleet-header-img.png";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <div className=" pb-10">
      <Helmet>
        <title>Campbelltown Taxi Cabs - Privacy Policy</title>
      </Helmet>
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl font-playfair">
                Privacy Policy
              </span>

              <p className="mt-8 text-sm md:text-base">
                At Sky Maxi Cabs, we value the privacy and security of our
                customers’ information. Any personal data provided during
                bookings is handled with the utmost care and used solely to
                facilitate safe, comfortable, and reliable transportation
                services. We may use details such as the number of passengers
                and travel requirements to assign the most suitable vehicle. Sky
                Maxi Cabs is committed to protecting your information in
                accordance with applicable privacy laws and regulations.
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
      <Container>
        <div>
          {/* Our Privacy Commitment */}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Our Privacy Commitment
            </h2>
            <p className="text-xs md:text-lg text-accent py-2">
              Campbelltown Taxi Cabs follows the Australian Privacy Principles
              under the Privacy Act 1988 (Cth). These principles guide how we
              collect, use, and protect your personal information.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Information We Collect
            </h2>
            <p className="text-xs md:text-lg text-accent py-2">
              We collect personal information necessary to provide our services,
              including:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Full name, email, and phone number</li>
              <li>Pickup and drop-off addresses</li>
              <li>Trip details (dates, times, routes)</li>
              <li>
                Payment details via secure third-party processors (we do not
                store card info)
              </li>
              <li>Customer feedback and enquiries</li>
              <li>Communication preferences</li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2">
              We do not collect sensitive information such as racial/ethnic
              origin, political or religious beliefs, health details, or trade
              union membership.
            </p>
          </div>

          {/* How We Collect Personal Information */}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              How We Collect Personal Information
            </h2>
            <p className="text-xs md:text-lg text-accent py-2">
              Campbelltown Taxi Cabs collects personal information directly from
              you when you:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Submit booking forms on our website</li>
              <li>Contact us by phone, email, or online chat</li>
              <li>
                Provide payment details via secure online links or over the
                phone
              </li>
              <li>Give feedback or leave reviews</li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2">
              We may also collect information through:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>
                Cookies and tracking tools on our website (for service
                improvements and analytics)
              </li>
              <li>
                Third-party services such as Stripe, Square, Zoho CRM, and
                Google Maps API
              </li>
              <li>Publicly available sources when relevant</li>
            </ul>
          </div>

          {/*Why We Collect Your Information*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Why We Collect Your Information
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              Your personal information is used to:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Provide and manage your bookings and transport services</li>
              <li>Issue tax invoices and receipts</li>
              <li>Communicate about your bookings and account</li>
              <li>Improve our services based on feedback and trends</li>
              <li>
                Send marketing emails and promotions (if you have opted in)
              </li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2">
              Drivers cannot charge more than the regulated maximum. All rank
              and hail taxis must use an approved fare meter that is visible to
              passengers and correctly calibrated.
            </p>

            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              You can opt out of marketing communications at any time by
              contacting us.
            </p>
          </div>

          {/* Cookies and Online Tracking*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Cookies and Online Tracking
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 ">
              Our website uses cookies and tracking tools to:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Monitor website performance and improve user experience</li>
              <li>Analyse traffic with Google Analytics</li>
              <li>Provide tailored advertising via Google Ads remarketing</li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              You can disable cookies in your browser, but some website features
              may not work properly.
            </p>
          </div>

          {/* Disclosure of Personal Information*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Disclosure of Personal Information
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 ">
              We do not sell or rent your personal information. We may share it
              only to:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>
                Drivers or subcontractors to fulfill your booking (trip details
                only)
              </li>
              <li>
                Third-party services like Zoho CRM, Stripe, Square, PayPal, or
                Google Maps for bookings, payments, and location services
              </li>
              <li>Comply with legal requirements or court orders</li>
              <li>With your consent</li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              All personal information is stored and processed within Australia.
            </p>
          </div>

          {/* Storage and Security of Personal Information*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Storage and Security of Personal Information
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 ">
              We take reasonable measures to keep your information secure:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Data is stored securely in our booking system and CRM</li>
              <li>Our website uses SSL encryption</li>
              <li>
                Payments are processed through PCI-compliant providers (Stripe,
                Square, PayPal)
              </li>
              <li>
                Personal information is retained for at least 7 years for legal
                and tax purposes
              </li>
              <li>
                Information no longer required is securely destroyed or
                anonymized
              </li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              While we implement security measures, no system is entirely
              risk-free. You acknowledge that sharing personal information
              online carries some risk.
            </p>
          </div>

          {/* Access and Correction of Personal Information*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Access and Correction of Personal Information
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 ">
              You can access the personal information we hold about you, subject
              to legal exceptions.
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>
                Requests should be sent in writing to
                info@campbelltowntaxicabs.com.au
              </li>
              <li>Proof of identity may be required</li>
              <li>
                Access is free, though a small administrative fee may apply for
                copies
              </li>
              <li>
                You can request corrections or deletion of your information,
                unless retention is required by law (e.g., for tax purposes)
              </li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              While we implement security measures, no system is entirely
              risk-free. You acknowledge that sharing personal information
              online carries some risk.
            </p>
          </div>

          {/*Maintaining Accuracy*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Maintaining Accuracy
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 ">
              We take steps to keep your information accurate and up to date.
              Please contact us if you notice any errors.
            </p>
          </div>

          {/* Complaints Handling*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Complaints Handling
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 ">
              If you believe we have mishandled your information, you can lodge
              a complaint:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>
                Send complaints to our privacy officer at
                info@campbelltowntaxicabs.com.au
              </li>
              <li>
                We aim to acknowledge complaints within 7 business days and
                resolve them within 14 business days
              </li>
              <li>
                If unsatisfied, you may contact the Office of the Australian
                Information Commissioner (OAIC) at www.oaic.gov.au
              </li>
            </ul>
          </div>

          {/*Changes to This Policy*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Changes to This Policy
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 ">
              We may update this Privacy Policy occasionally. Updates will be
              published on our website. Continued use of our services
              constitutes acceptance of the revised policy.
            </p>
          </div>

          {/* Contact Us*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Contact Us
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 ">
              For questions or complaints about this Privacy Policy, contact:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2">
              <li>Campbelltown Taxi Cabs</li>
              <li>Campbelltown, NSW, Australia</li>
              <li>Email: info@campbelltowntaxicabs.com.au</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
