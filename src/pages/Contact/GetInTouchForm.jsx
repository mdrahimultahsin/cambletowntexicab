import { useState } from "react";
import emailjs from "@emailjs/browser";

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let message = `
      <b style="font-weight:bold; font-size:20px">Customer Name:</b> ${formData.name} <br/>
      <b style="font-weight:bold; font-size:20px">Phone:</b> +${formData.number} <br/>
      <b style="font-weight:bold; font-size:20px">Email:</b> ${formData.email} <br/>
      <b style="font-weight:bold; font-size:20px">Message:</b> ${formData.message} <br/>
    `;

    const templateParams = {
      name: formData.name,
      message,
    };

    emailjs
      .send(
        "service_h0wuall",
        "template_kjhxlz8",
        templateParams,
        "4MSsEGESDo8OwNYY2"
      )
      .then(
        () => {
          setLoading(false);
          setShowPopup(true);

          setTimeout(() => {
            setShowPopup(false);
          }, 5000);

          setFormData({
            name: "",
            email: "",
            number: "",
            message: "",
          });
        },
        () => {
          ;
          setLoading(false);
        }
      );
  };

  return (
    <div className="relative max-w-lg mx-auto bg-white p-3 md:p-6 rounded-lg shadow-md">

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="absolute top-3 right-3 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg animate-fadeIn">
          Message sent successfully!
        </div>
      )}

      <h2 className="section-title text-left!">Reach Out to Campbelltown Taxi Cabs
</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`bg-primary text-white py-3 font-semibold rounded-md transition 
            ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-secondary"}
          `}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Sending...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      
    </div>
  );
};

export default GetInTouchForm;
