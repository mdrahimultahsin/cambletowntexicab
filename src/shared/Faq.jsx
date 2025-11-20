import { useState } from "react";
import Container from "./Container";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a Maxi Cab in Sydney?",
      answer:
        "You can book a Maxi Cab directly through our website, mobile app, or by calling our support team. Simply provide your pickup location, destination, and preferred time.",
    },
    {
      question: "Do you offer airport pickup and drop-off services?",
      answer:
        "Yes! We provide 24/7 airport transfers to and from Sydney Airport. Our drivers track your flight to ensure timely pickup even if your flight is delayed.",
    },
    {
      question: "How many passengers can a Maxi Cab accommodate?",
      answer:
        "Our Maxi Cabs can accommodate up to 11 passengers depending on the vehicle type. We also offer additional space for luggage upon request.",
    },
    {
      question: "Are your prices fixed or metered?",
      answer:
        "We offer both fixed pricing and metered options. For airport transfers and long rides, fixed pricing is recommended for complete transparency.",
    },
    {
      question: "Do you provide wheelchair-accessible taxis?",
      answer:
        "Yes, we have wheelchair-accessible Maxi Cabs equipped with proper safety systems. Make sure to select the wheelchair option during booking.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
        
    <section className="mt-30 mb-30">
        <Container>
      <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-10 text-primary">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 cursor-pointer bg-white shadow-sm"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </Container>
    </section>
  );
};

export default Faq;
