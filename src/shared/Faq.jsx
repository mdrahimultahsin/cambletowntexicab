import {useState} from "react";
import Container from "./Container";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a taxi in Campbelltown?",
      answer:
        "Booking is easy: call us, use the online booking form on our website, or send us a message via WhatsApp. Our taxi service in Campbelltown, NSW, is available 24/7, and we confirm each booking promptly.",
    },
    {
      question: "Are your fares fixed or metered?",
      answer:
        "Most of our rides have fixed, transparent fares, so you always know what you'll pay. For on-demand and long-distance trips, we may use metered fares, but we always provide an estimate up front. There are no surprises when you ride with our Campbelltown taxi cabs.",
    },
    {
      question: "Do you provide wheelchair-accessible taxis and baby seats?",
      answer:
        "Yes! Our fleet includes wheelchair-accessible vehicles, and we offer child seats and booster seats on request. We are committed to making taxi Campbelltown services inclusive and safe for all passengers.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve the entire Campbelltown area, Macarthur region, and surrounding suburbs. Our taxi Campbelltown NSW services also extend to greater Sydney, including airport and cruise terminal transfers, weddings, events, and more. Wherever you need to go, our taxis Campbelltown can get you there.",
    },
    {
      question: "How can I track my taxi arrival?",
      answer:
        "We understand the importance of being on time. Once you've booked your taxi in Campbelltown, you'll receive a confirmation message with the details of your ride and estimated arrival time. For added convenience, we offer live tracking so you can see when your Campbelltown taxi is on its way.",
    },
    {
      question: "Can I book a taxi in advance?",
      answer:
        "Absolutely! Whether you’re planning a ride for the next day or scheduling a future airport transfer, our Campbelltown taxi service allows you to book in advance for guaranteed peace of mind. Book your ride online, by phone, or through WhatsApp.",
    },
    {
      question: "Do you charge extra for luggage or large items?",
      answer:
        "We believe in transparent pricing. Our fares include a reasonable allowance for luggage, so you don’t have to worry about hidden fees for small bags. For large items like bikes or oversized luggage, a small surcharge may apply, but we'll inform you of any additional costs upfront.",
    },
    {
      question: "Are your taxis available for long-distance travel?",
      answer:
        "Yes! Campbelltown Taxi Cabs offers long-distance travel to nearby cities, regional areas, and even interstate trips. Whether it’s a corporate journey, family vacation, or special event, our taxi service Campbelltown will provide a comfortable ride for your extended trips. Book now for a seamless long-distance experience.",
    },
    {
      question: "How can I cancel or change my booking?",
      answer:
        "We offer flexible booking options. If you need to cancel or modify your taxi Campbelltown reservation, simply call us or send us a message through WhatsApp. We’ll assist you promptly to make any necessary changes. Please note that cancellations or changes made within a short time frame may be subject to a small fee, which will be communicated upfront.",
    },
    {
      question: "Can I pay by card or through mobile payment?",
      answer:
        "Yes! We accept a variety of payment methods, including credit/debit cards, mobile payments (like Apple Pay or Google Pay), and cash. Our goal is to make paying for your taxi Campbelltown ride as convenient and seamless as possible.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-30 mb-10">
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

export default Faq;
