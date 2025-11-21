import Container from "./Container";
import ButtonPrimary from "./ButtonPrimary";
import { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUsers, FaCar, FaClock, FaCreditCard, FaExchangeAlt, FaChevronDown } from "react-icons/fa";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupType: "",
    name: "",
    phone: "",
    email: "",
    pickupAddress: "",
    dropoffAddress: "",
    passengers: "",
    vehicleType: "",
    timeRequired: "",
    returnTrip: "",
    specialInstructions: "",
    paymentMode: "cash"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Handle form submission
  };

  const pickupOptions = [
    { value: "anywhere", label: "🚖Pickup from Anywhere in Sydney" },
    { value: "airport", label: "✈️Pickup from Sydney Airport" }
  ];

  const passengerOptions = [
    { value: "", label: "No. of Passengers" },
    { value: "1", label: "1 Passenger" },
    { value: "2", label: "2 Passengers" },
    { value: "3", label: "3 Passengers" },
    { value: "4", label: "4 Passengers" },
    { value: "5", label: "5 Passengers" },
    { value: "6+", label: "6+ Passengers" }
  ];

  const vehicleOptions = [
    { value: "", label: "Vehicle Type" },
    { value: "sedan", label: "Standard Sedan" },
    { value: "suv", label: "SUV" },
    { value: "maxi", label: "Maxi Van" },
    { value: "premium", label: "Premium Car" }
  ];

  const timeOptions = [
    { value: "", label: "Time Required" },
    { value: "asap", label: "As Soon As Possible" },
    { value: "1h", label: "Within 1 Hour" },
    { value: "2h", label: "Within 2 Hours" },
    { value: "specific", label: "Specific Time" }
  ];

  const paymentOptions = [
    { value: "cash", label: "Payment Mode: Cash" },
    { value: "card", label: "Payment Mode: Credit Card" },
    { value: "online", label: "Payment Mode: Online Payment" }
  ];

  return (
    <section className="w-full bg-linear-to-br from-slate-50 to-blue-50 pt-30 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full -translate-x-48 translate-y-48"></div>
      </div>

      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-primary">
              Book The Best Taxi/Maxi Van Service in Sydney
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant quotes and book your ride in seconds. Professional service guaranteed.
            </p>
          </div>


          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Pickup Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {pickupOptions.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 cursor-pointer px-6 py-4 rounded-2xl border-2 transition-all duration-300 font-semibold ${
                  formData.pickupType === option.value
                    ? "border-primary bg-primary/10 text-primary shadow-lg scale-105"
                    : "border-gray-300 bg-white text-gray-700 hover:border-primary/50 hover:shadow-md"
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.pickupType === option.value 
                    ? "border-primary bg-primary" 
                    : "border-gray-400"
                }`}>
                  {formData.pickupType === option.value && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <input
                  type="radio"
                  name="pickupType"
                  value={option.value}
                  onChange={handleInputChange}
                  className="hidden"
                />
                {option.label}
              </label>
            ))}
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Name */}
              <div className="md:col-span-2 relative">
                <FaUser className="absolute left-4 top-4 text-gray-400 text-lg" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full border-2 border-gray-200 p-4 pl-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhone className="absolute left-4 top-4 text-gray-400 text-lg" />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full border-2 border-gray-200 p-4 pl-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-400 text-lg" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full border-2 border-gray-200 p-4 pl-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              {/* Pickup Address */}
              <div className="md:col-span-2 relative">
                <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400 text-lg" />
                <input
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleInputChange}
                  placeholder="Pickup Address (Street No., Street Name, Suburb)"
                  className="w-full border-2 border-gray-200 p-4 pl-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              {/* Dropoff Address */}
              <div className="md:col-span-2 relative">
                <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400 text-lg" />
                <input
                  name="dropoffAddress"
                  value={formData.dropoffAddress}
                  onChange={handleInputChange}
                  placeholder="Drop Off Address (Street No., Street Name, Suburb)"
                  className="w-full border-2 border-gray-200 p-4 pl-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              {/* Passengers */}
              <div className="relative">
                <FaUsers className="absolute left-4 top-4 text-gray-400 text-lg" />
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-200 p-4 pl-12 pr-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  required
                >
                  {passengerOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Vehicle Type */}
              <div className="relative">
                <FaCar className="absolute left-4 top-4 text-gray-400 text-lg" />
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-200 p-4 pl-12 pr-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  required
                >
                  {vehicleOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Time Required */}
              <div className="md:col-span-2 relative">
                <FaClock className="absolute left-4 top-4 text-gray-400 text-lg" />
                <select
                  name="timeRequired"
                  value={formData.timeRequired}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-200 p-4 pl-12 pr-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  required
                >
                  {timeOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Return Trip */}
              <div className="md:col-span-2 flex items-center gap-6 p-4 bg-gray-50 rounded-xl">
                <FaExchangeAlt className="text-gray-400 text-xl" />
                <span className="text-lg font-semibold text-gray-700">Return Trip</span>
                <div className="flex gap-6">
                  {["no", "yes"].map(option => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        formData.returnTrip === option 
                          ? "border-primary bg-primary" 
                          : "border-gray-400"
                      }`}>
                        {formData.returnTrip === option && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <input
                        type="radio"
                        name="returnTrip"
                        value={option}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <span className="font-medium capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div className="md:col-span-2">
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  placeholder="Special Instructions (e.g., child seat, extra luggage, etc.)"
                  className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white h-24 resize-none"
                  rows={4}
                />
              </div>

              {/* Payment Mode */}
              <div className="md:col-span-2 relative">
                <FaCreditCard className="absolute left-4 top-4 text-gray-400 text-lg" />
                <select
                  name="paymentMode"
                  value={formData.paymentMode}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-200 p-4 pl-12 pr-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                >
                  {paymentOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-10">
              <ButtonPrimary 
                type="submit" 
                className="px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book Your Ride Now
              </ButtonPrimary>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5 min</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Secure</div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default BookingForm;