import { useState } from "react";
import Container from "./Container";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "How do I book a rental car?",
      answer:
        "You can book a rental car through our website, by phone, or via our customer support chat. Select your pickup location, date, car type, and complete the reservation.",
    },
    {
      question: "What documents do I need to rent a car?",
      answer:
        "You will need a valid driver’s license, a government-issued ID, and a credit or debit card for the security deposit.",
    },
    {
      question: "Is there a minimum age requirement for renting a car?",
      answer:
        "Yes. The minimum age to rent a car is typically 21 years. Drivers under 25 may incur a young driver surcharge.",
    },
    {
      question: "Do you offer airport pickup and drop-off?",
      answer:
        "Absolutely! We provide convenient pickup and drop-off at major airports. Just select the airport option during booking.",
    },
    {
      question: "Can I rent a car without a deposit?",
      answer:
        "A security deposit is usually required for all rentals. The amount depends on the vehicle type and rental duration.",
    },
    {
      question: "What types of cars are available for rent?",
      answer:
        "We offer a wide range of vehicles — economy, sedans, SUVs, luxury cars, 7-seaters, and vans. You can choose based on your travel needs.",
    },
    {
      question: "Do you offer long-term car rentals?",
      answer:
        "Yes, we provide weekly, monthly, and long-term rental options at discounted rates. Contact our support for custom pricing.",
    },
    {
      question: "Can I return the car to a different location?",
      answer:
        "Yes, one-way rentals are available for select routes. Additional charges may apply depending on the drop-off location.",
    },
    {
      question: "Is insurance included with the rental?",
      answer:
        "Basic insurance is included, but you can add extra coverage such as collision, theft protection, and full insurance for peace of mind.",
    },
    {
      question: "What happens if I return the car late?",
      answer:
        "Late returns incur additional hourly charges. To avoid penalties, always inform us ahead of time if you need to extend your rental period.",
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

export default Faq;
