import React, { useState } from 'react';

const GetInTouchForm = () => {
      const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error messages

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with your email API integration
    console.log("Form Data:", formData);

    // Reset form
    setFormData({ name: "", email: "", number: "", message: "" });
    setStatus("Your message has been sent successfully!");
  };
    return (
            <div className="max-w-lg mx-auto bg-white p-3 md:p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-primary mb-6">Get in Touch</h2>

      {status && <p className="mb-4 text-green-600">{status}</p>}

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
          className="bg-primary text-white py-3 font-semibold rounded-md hover:bg-secondary transition"
        >
          Submit
        </button>
      </form>
    </div>
    );
};

export default GetInTouchForm;