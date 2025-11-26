import React from "react";
import Container from "../../shared/Container";
import { Link } from "react-router";
import ButtonSecondary from "../../shared/ButtonSecondary";
import { FaHandPointer } from "react-icons/fa";
import titleImg from "../../assets/fleet-header-img.png";
import { IoCallSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const TermsAndCondition = () => {
  return (
    <div className=" pb-10">
      <Helmet>
        <title>Campbelltown Taxi Cabs - Terms & Conditions</title>
      </Helmet>
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl font-playfair">
                Terms and Condition
              </span>

              <p className="mt-8 text-sm md:text-base">
                At Sky Maxi Cabs, we maintain a diverse and modern fleet of vehicles to accommodate various transportation needs within Sydney. All vehicles are regularly serviced and inspected to ensure safety, comfort, and reliability for every passenger. The type of vehicle provided will depend on availability and the number of passengers traveling. Sky Maxi Cabs reserves the right to assign the most appropriate vehicle for your journey.
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
              <img
                src={titleImg}
                alt="Campbelltown Taxi Cabs Terms & Conditons Img"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div>
          {/* who we are */}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Who We Are
            </h2>
            <ul className="text-xs md:text-lg text-accent">
              <li>
                We are <b>Campbelltown Taxi Cabs</b>
              </li>
              <li>
                We provide reliable taxi and maxi cab booking services
                throughout Campbelltown and the surrounding areas.
              </li>
              <li>
                All our drivers are professional subcontractors who are fully
                licensed and operate insured vehicles.
              </li>
              <li>Our service is available 24 hours a day, 7 days a week.</li>
              <li>
                We are committed to offering safe, dependable, and hassle-free
                transportation for every passenger.
              </li>
              <li>By booking with us, you agree to comply with these Terms.</li>
            </ul>
          </div>

          {/* make a booking */}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Making a Booking
            </h2>
            <p className="text-xs md:text-lg text-accent py-2">
              You can book a ride with Campbelltown Taxi Cabs using any of the
              following methods:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>
                <b>Online: </b>Submit your trip details through our 24/7 booking
                form.
              </li>
              <li>
                <b>Phone:</b>Call our team anytime for quick and direct
                assistance.
              </li>
              <li>
                <b>WhatsApp:</b>Send your booking request for fast
                communication.
              </li>
              <li>
                <b>Email:</b>Contact us if you prefer written booking
                confirmation.
              </li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2">
              Bookings are handled on a first-come, first-served basis.
              Availability depends on the time, location, and vehicle type
              required.
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              We recommend pre-booking, especially for airport transfers, early
              morning trips, late-night travel, and peak-hour demand. Instant
              bookings are accepted when a driver is available nearby.
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              Once your booking is confirmed, you will receive an SMS or email
              with:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Booking reference number</li>
              <li>Pickup time and location</li>
              <li>Assigned vehicle type</li>
              <li>Customer support contact details</li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2">
              By making a booking, you confirm that all information
              provided—such as pickup address, time, and passenger details—is
              accurate. Incorrect details may result in delays or missed
              pickups.
            </p>
          </div>

          {/* booking confirmations and charges */}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Booking Confirmation and Changes
            </h2>
            <p className="text-xs md:text-lg text-accent py-2">
              When you book with Campbelltown Taxi Cabs, you will receive a
              confirmation by SMS or email. This will include:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Booking reference number</li>
              <li>Pickup time and address</li>
              <li>Vehicle type and capacity</li>
              <li>Customer support contact details</li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2">
              If you do not receive your confirmation within a reasonable time,
              please contact us to verify your booking.
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              Please check your confirmation carefully. If any details are
              incorrect, notify us immediately so we can update your booking.
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              You may request changes such as:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Updated pickup time</li>
              <li>Different pickup or drop-off location</li>
              <li>Change in passenger count</li>
              <li>Change of vehicle type</li>
              <li>Additional stops</li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2">
              All changes depend on driver and vehicle availability. If a driver
              has already been dispatched, the change may be processed as a new
              booking.
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              If the change affects your fare (e.g., extra stops or more
              passengers), we will inform you before making any adjustments. No
              additional charges will be applied without your approval.
            </p>
          </div>

          {/* Right to Refuse or Cancel a Booking */}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Right to Refuse or Cancel a Booking
            </h2>
            <p className="text-xs md:text-lg text-accent py-2">
              At Campbelltown Taxi Cabs, we do our best to accept every booking.
              However, we may refuse or cancel a booking if:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>No vehicle is available at the requested time</li>
              <li>The booking details are incorrect or incomplete</li>
              <li>
                A passenger displays unsafe, abusive, or unlawful behaviour
              </li>
              <li>
                The request poses a risk to our drivers, vehicles, or other
                passengers
              </li>
              <li>
                Operational issues outside our control prevent us from sending a
                vehicle
              </li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2">
              If we need to cancel your booking, we will notify you as soon as
              possible and provide alternative options where available.
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              Our drivers may also refuse service at pickup if:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>
                The passenger is intoxicated, abusive, or a safety concern
              </li>
              <li>
                Passenger count or luggage exceeds the booked vehicle capacity
              </li>
              <li>Hazardous or illegal items are presented</li>
              <li>
                The passenger is not ready within the allowed waiting time
              </li>
            </ul>
          </div>

          {/* Fares and Pricing*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Fares and Pricing
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              Rank & Hail Taxis (Street Pickups)
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              In New South Wales, fares for taxis picked up from the street or
              at a rank are regulated by Transport for NSW. These fares include:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Flag fall</li>
              <li>Distance rates</li>
              <li>Waiting time</li>
              <li>Peak or late-night charges</li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2">
              Drivers cannot charge more than the regulated maximum. All rank
              and hail taxis must use an approved fare meter that is visible to
              passengers and correctly calibrated.
            </p>

            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              Booked Taxi Services
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              For pre-booked trips, fares are not regulated by Transport for
              NSW. This means Campbelltown Taxi Cabs sets its own pricing for
              all booked services. Prices may be:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Fixed fares</li>
              <li>Time-and-distance rates</li>
              <li>Peak or after-hours pricing</li>
              <li>Promotional or discounted fares</li>
            </ul>

            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              Upfront Fare Estimates
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              When you book with us, we will provide an upfront fare estimate
              before your trip begins. Estimates may be based on:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Expected distance</li>
              <li>Estimated travel time</li>
              <li>Fixed-price routes</li>
              <li>A combination of time and distance</li>
            </ul>

            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              Passenger Service Levy
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              A state levy applies to every passenger trip in NSW. Since 1 July
              2023, the levy is $1.20 per trip ($1.32 with GST). This may be
              absorbed by us or included in your fare.
            </p>

            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              TTSS Customers
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              For Taxi Transport Subsidy Scheme (TTSS) passengers, regulated
              meter fares apply for both booked and street pickups. The fare
              must not exceed the regulated maximum.
            </p>
          </div>

          {/* Payments*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Payments
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 ">
              We offer simple and secure payment options for your convenience.
            </p>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              Payment Methods:
            </p>
            <p className="text-xs md:text-lg text-accent py-2 ">
              Payment Methods:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Online via secure payment link (Stripe or Square)</li>
              <li>By card over the phone before your trip</li>
              <li>Cash or card directly to the driver at pickup or drop-off</li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              Security:
            </p>
            <p className="text-xs md:text-lg text-accent py-2">
              All online payments are processed through secure, PCI-compliant
              providers. Your card details are never stored by us, and our
              website uses SSL encryption to protect your information.
            </p>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              Receipts:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Online payments: digital invoice sent by email</li>
              <li>
                Driver payments: printed or digital receipt available on request
              </li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              When Payment is Required:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>Prepaid trips must be settled before booking confirmation</li>
              <li>
                Cash or card payments to the driver must be completed at the end
                of the trip
              </li>
              <li>Unpaid bookings may be cancelled</li>
            </ul>
          </div>

          {/* waiting time policy*/}
          <div className="py-5">
            <h2 className=" font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Waiting Time Policy
            </h2>
            <p className="text-xs md:text-lg text-accent py-2 ">
              We allow a short grace period for every booking to accommodate
              minor delays.
            </p>
            <p className="text-xs md:text-lg text-accent py-2 ">
              If the pickup takes longer than the grace period, a waiting charge
              of $1.50 per minute applies.
            </p>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              Key Points:
            </p>
            <ul className="text-xs md:text-lg text-accent py-2 list-disc ml-7">
              <li>
                Waiting charges are added to your fare and must be paid at the
                end of the trip.
              </li>
              <li>
                Please notify us if you expect a delay so we can assist with
                rebooking or adjustments.
              </li>
            </ul>
            <p className="text-xs md:text-lg text-accent py-2 font-bold">
              This ensures fair compensation for the driver’s time and keeps
              vehicles available for all customers.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndCondition;
