import {useState} from "react";
import Container from "./Container";

const Faq = ({faqs}) => {
  const [openIndex, setOpenIndex] = useState(null);

  

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-30 mb-10">
      <Container>
        <h2 className="section-title">
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
