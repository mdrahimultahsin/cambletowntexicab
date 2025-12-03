import {useState} from "react";
import Container from "../../shared/Container";

const CabChargeFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const cabchargeFaqs = [
    {
      question:
        "What is Cabcharge and how does it work with Campbelltown Taxi Service?",
      answer:
        "Cabcharge is Australia’s leading travel payment platform that allows passengers to pay for taxi fares using a secure, cashless system. At Campbelltown Taxi Service, you can use your Cabcharge Card, Cabcharge paper docket, or digital card to pay instantly. Simply present your card or digital code to the driver, and the fare will be processed electronically—fast, safe, and hassle-free.",
    },
    {
      question: "Do you accept Cabcharge cards for all taxi services?",
      answer:
        "Yes, Campbelltown Taxi Service accepts all Cabcharge payment types, including Cabcharge Cards, eTickets (paper dockets), and digital Cabcharge cards. Whether you're booking an airport transfer, hospital appointment, business trip, or local ride, you can pay using Cabcharge with no extra steps.",
    },
    {
      question: "Can I use a Cabcharge digital card on my phone?",
      answer:
        "Absolutely! Cabcharge Digital Cards are fully supported by Campbelltown Taxi Service. You can store your digital Cabcharge card on your mobile device and simply show the QR code or digital number to the driver for quick, contactless payment. It’s perfect for corporate travel, NDIS support workers, and everyday passengers.",
    },
    {
      question: "Do you accept Cabcharge paper dockets (eTickets)?",
      answer:
        "Yes, we accept Cabcharge paper dockets, also known as eTickets. Just hand the docket to your Campbelltown Taxi Service driver at the end of the trip. The fare will be processed securely through the Cabcharge network. This option is popular with businesses, government travel, and aged-care transport.",
    },
    {
      question: "Are there any extra fees when paying with Cabcharge?",
      answer:
        "No extra fees are charged by Campbelltown Taxi Service when you pay with Cabcharge. The fare is charged exactly as displayed on the meter or quoted price. Cabcharge may apply their standard card processing fee, but we do not add any additional charges for using Cabcharge payment methods.",
    },
    {
      question: "Is Cabcharge a safe payment method for taxi rides?",
      answer:
        "Yes, Cabcharge is one of the safest taxi payment methods in Australia. All transactions are encrypted and processed through a secure, cloud-based system. Whether you use a Cabcharge Card, digital card, or paper docket, your payment is protected at every step when travelling with Campbelltown Taxi Service.",
    },
    {
      question: "Who commonly uses Cabcharge for taxi payments?",
      answer:
        "Cabcharge is widely used by corporate travellers, government employees, NDIS support providers, medical transport services, and everyday passengers who prefer cashless travel. At Campbelltown Taxi Service, we regularly service customers who rely on Cabcharge for business trips, hospital visits, meetings, and community appointments.",
    },
    {
      question: "Can I book a Cabcharge taxi in advance?",
      answer:
        "Yes, you can pre-book a Cabcharge-friendly taxi with Campbelltown Taxi Service at any time. Simply mention that you’ll be paying with Cabcharge Card, paper docket, or digital card, and we’ll assign a driver equipped to accept your preferred payment method. Pre-booking is ideal for airport transfers, early-morning trips, and medical appointments.",
    },
    {
      question: "Do you provide receipts for Cabcharge payments?",
      answer:
        "Yes, all Cabcharge payments processed by Campbelltown Taxi Service come with an instant electronic receipt. This is perfect for business expenses, tax claims, or reimbursement purposes. Digital receipts can be easily stored or forwarded for record-keeping.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-30 mb-10">
      <Container>
        <h2 className="section-title">FAQs</h2>

        <div className="space-y-4">
          {cabchargeFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 cursor-pointer bg-white shadow-sm"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CabChargeFaq;
