import Container from "../../shared/Container";
import ButtonSecondary from "../../shared/ButtonSecondary";
import {Link} from "react-router";
import {FaHandPointer} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";
import titleImg from "../../assets/fleet-header-img.png";
import usePageTitle from "../../hooks/usePageTitle";

const refundData = [
  {time: "Up to 3 hours", charge: "100% of fare", refund: "0% of fare"},
  {time: "Up to 6 hours", charge: "75% of fare", refund: "25% of fare"},
  {time: "Up to 12 hours", charge: "50% of fare", refund: "50% of fare"},
  {time: "Up to 24 hours", charge: "25% of fare", refund: "75% of fare"},
  {
    time: "More than 24 hours",
    charge: "$30 fee",
    refund: "Full refund minus $30",
  },
];

const CancellationAndRefunds = () => {
  usePageTitle("Refund Policy");
  return (
    <section className="pb-20">
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl font-playfair">
                Refund Policy
              </span>
              <p className="mt-8 text-sm md:text-base">
                At Campbelltown Taxi Cabs, we strive to provide a reliable and
                comfortable travel experience for all our customers. Refunds, if
                applicable, are subject to the terms of your booking and the
                notice provided prior to the scheduled journey. The type of
                vehicle reserved may vary based on availability at the time of
                travel. Campbelltown Taxi Cabs reserves the right to determine
                eligibility for refunds in accordance with our booking and
                cancellation policies.
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
              <img src={titleImg} alt="" />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-10 md:py-20">
          <h2 className="font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
            Refund Policy
          </h2>
          <p className="text-xs md:text-lg text-accent">
            Plans can change, and we understand. This policy explains how
            cancellations and refunds are handled.
          </p>

          <section className="mb-6">
            <h2 className="font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl mt-4">
              Cancellations
            </h2>
            <p className="text-xs md:text-lg text-accent">
              If you need to cancel or change a booking, please notify us as
              early as possible. Refunds depend on how much notice is given
              before your scheduled pickup.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Refund and Cancellation Charges
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-4 border-b border-gray-300">
                      Time before journey
                    </th>
                    <th className="px-4 py-4 border-b border-gray-300">
                      Cancellation charge
                    </th>
                    <th className="px-4 py-4 border-b border-gray-300">
                      Refund amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {refundData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4 border-b border-gray-300">
                        {item.time}
                      </td>
                      <td className="px-4 py-4 border-b border-gray-300">
                        {item.charge}
                      </td>
                      <td className="px-4 py-4 border-b border-gray-300">
                        {item.refund}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Refund Process
            </h2>
            <ul className="text-xs md:text-lg text-accent">
              <li>Refunds are returned to the original payment method.</li>
              <li>Processing may take 3–10 business days.</li>
              <li>
                For international payments, any bank fees may be deducted.
              </li>
              <li>Online payment surcharges are non-refundable.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Exceptions
            </h2>
            <p className="text-xs md:text-lg text-accent">
              Refunds will not be given if:
            </p>
            <ul className="text-xs md:text-lg text-accent">
              <li>You cancel less than 3 hours before the trip.</li>
              <li>
                Incorrect booking details are provided (e.g., wrong date or
                flight number).
              </li>
              <li>You do not show up at the pickup point.</li>
              <li>You leave the pickup point without informing us.</li>
            </ul>
          </section>

          <p className="text-xs md:text-lg text-accent">
            These Refund Policies were updated on 29/08/2025.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CancellationAndRefunds;
