import Container from "./Container";
import ButtonPrimary from "./ButtonPrimary";
import {useState} from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUsers,
  FaCar,
  FaClock,
  FaCreditCard,
  FaExchangeAlt,
  FaChevronDown,
} from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const areas = [
  "Campbelltown",
  "Macarthur",
  "Menangle",
  "Leumeah",
  "Raby",
  "St Andrew's",
  "St Helen's Park",
  "Ruse",
  "Minto",
  "Ingleburn",
  "Glenfield",
  "Camden",
  "Camden South",
  "Oran Park",
  "Gregory Hills",
  "Eagle Vale",
  "Elderslie",
  "Spring Farm",
  "Cobbity",
  "Cowdor",
  "Denham Court",
  "Edmondson Park",
  "Austral",
  "Liverpool",
  "Picton",
  "Thilmere",
  "Bargo",
  "Bowral",
  "Goulburn",
];

const AutocompleteInput = ({label, value, onChange}) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleInput = (e) => {
    const input = e.target.value;
    onChange(input);

    if (input.length > 0) {
      const filtered = areas.filter((area) =>
        area.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (area) => {
    onChange(area);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        value={value}
        onChange={handleInput}
        placeholder={label}
        className="w-full border-2 border-gray-200 py-4 px-10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
        required
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 w-full mt-1 max-h-40 overflow-y-auto z-50 rounded-lg shadow-lg">
          {suggestions.map((area) => (
            <li
              key={area}
              className="p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={() => handleSelect(area)}
            >
              {area}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupType: "anywhere",
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
    paymentMode: "cash",
    // Airport specific fields
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
  });
console.log(formData);
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Handle form submission
  };

  const pickupOptions = [
    {value: "anywhere", label: "🚖 Pickup from Anywhere in Sydney"},
    {value: "airport", label: "✈️ Pickup from Sydney Airport"},
  ];

  const passengerOptions = [
    {value: "", label: "No. of Passengers"},
    {value: "1", label: "1 Passenger"},
    {value: "2", label: "2 Passengers"},
    {value: "3", label: "3 Passengers"},
    {value: "4", label: "4 Passengers"},
    {value: "5", label: "5 Passengers"},
    {value: "6+", label: "6+ Passengers"},
  ];

  const vehicleOptions = [
    {value: "", label: "Vehicle Type"},
    {value: "sedan", label: "Standard Sedan"},
    {value: "suv", label: "SUV"},
    {value: "maxi", label: "Maxi Van"},
    {value: "premium", label: "Premium Car"},
  ];

  const timeOptions = [
    {value: "", label: "Time Required"},
    {value: "asap", label: "As Soon As Possible"},
    {value: "1h", label: "Within 1 Hour"},
    {value: "2h", label: "Within 2 Hours"},
    {value: "specific", label: "Specific Time"},
  ];

  const paymentOptions = [
    {value: "cash", label: "Payment Mode: Cash"},
    {value: "card", label: "Payment Mode: Bank Card"},
    {value: "cabcharge", label: "Payment Mode: CabCharge"},
    {value: "ttss", label: "Payment Mode: TTSS"},
  ];

  return (
    <section className="w-full bg-linear-to-br from-slate-50 to-blue-50 py-16 relative overflow-hidden">
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
              Get instant quotes and book your ride in seconds. Professional
              service guaranteed.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
          >
           
            {/* Pickup Options */}
<div className="mb-10">
  <label className="block text-lg font-semibold text-gray-700 mb-4 text-center">
    Select Pickup Type
  </label>
  <div className="flex flex-wrap justify-center gap-4">
    {pickupOptions.map((option) => (
      <label
        key={option.value}
        htmlFor={option.value}
        className={`flex items-center gap-3 cursor-pointer px-6 py-4 rounded-2xl border-2 transition-all duration-300 font-semibold ${
          formData.pickupType === option.value
            ? "border-primary bg-primary/10 text-primary shadow-lg scale-105"
            : "border-gray-300 bg-white text-gray-700 hover:border-primary/50 hover:shadow-md"
        }`}
      >
        {/* Custom Radio Circle */}
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            formData.pickupType === option.value
              ? "border-primary bg-primary"
              : "border-gray-400"
          }`}
        >
          {formData.pickupType === option.value && (
            <div className="w-2 h-2 rounded-full bg-white"></div>
          )}
        </div>

        {/* Hidden Radio Input */}
        <input
          id={option.value}
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
</div>


            {/* Airport Specific Fields */}
            {formData.pickupType === "airport" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-blue-50 rounded-2xl border-2 border-blue-100">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                    value={formData.pickupLocation}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupLocation: e.target.value })
                    }
                    placeholder="e.g., Sydney Airport Terminal 1"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Drop-off Location *
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                    value={formData.dropoffLocation}
                    onChange={(e) =>
                      setFormData({ ...formData, dropoffLocation: e.target.value })
                    }
                    placeholder="e.g., Your destination address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                    value={formData.pickupDate}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupDate: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Time *
                  </label>
                  <input
                    type="time"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                    value={formData.pickupTime}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupTime: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            )}

            {/* Regular Booking Fields */}
            {formData.pickupType === "anywhere" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-4 text-gray-400 text-lg" />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full border-2 border-gray-200 p-4 pl-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="md:col-span-2 w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative w-full">
                    <PhoneInput
                      country={"au"}
                      value={formData.phone}
                      onChange={(phone) => setFormData({...formData, phone})}
                      dropdownClass="rounded-xl shadow-lg"
                      containerClass="w-full"
                      inputClass="w-full border-2 border-gray-200 p-4 pl-14 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 bg-gray-50 focus:bg-white"
                      buttonClass="border-none bg-transparent"
                      specialLabel=""
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-4 text-gray-400 text-lg" />
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full border-2 border-gray-200 p-4 pl-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Return Trip */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Return Trip
                  </label>
                  <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-xl">
                    <FaExchangeAlt className="text-gray-400 text-xl" />
                    <div className="flex gap-6">
                      {["no", "yes"].map((option) => {
  const id = `returnTrip-${option}`;
  return (
    <label key={option} htmlFor={id} className="flex items-center gap-3 cursor-pointer">
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          formData.returnTrip === option ? "border-primary bg-primary" : "border-gray-400"
        }`}
      >
        {formData.returnTrip === option && (
          <div className="w-2 h-2 rounded-full bg-white"></div>
        )}
      </div>
      <input
        type="radio"
        id={id} // add this
        name="returnTrip"
        value={option}
        onChange={handleInputChange}
        className="hidden"
      />
      <span className="font-medium capitalize">{option}</span>
    </label>
  );
})}

                    </div>
                  </div>
                </div>

                {/* Pickup Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Address *
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400 text-lg z-10" />
                    <AutocompleteInput
                      label="Street No., Street Name, Suburb"
                      value={formData.pickupAddress}
                      onChange={(val) =>
                        setFormData({...formData, pickupAddress: val})
                      }
                    />
                  </div>
                </div>

                {/* Dropoff Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Drop Off Address *
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400 text-lg z-10" />
                    <AutocompleteInput
                      label="Street No., Street Name, Suburb"
                      value={formData.dropoffAddress}
                      onChange={(val) =>
                        setFormData({...formData, dropoffAddress: val})
                      }
                    />
                  </div>
                </div>

                {/* Passengers */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Passengers *
                  </label>
                  <div className="relative">
                    <FaUsers className="absolute left-4 top-4 text-gray-400 text-lg" />
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 p-4 pl-12 pr-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      required
                    >
                      {passengerOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Vehicle Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Vehicle Type *
                  </label>
                  <div className="relative">
                    <FaCar className="absolute left-4 top-4 text-gray-400 text-lg" />
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 p-4 pl-12 pr-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      required
                    >
                      {vehicleOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Time Required */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time Required *
                  </label>
                  <div className="relative">
                    <FaClock className="absolute left-4 top-4 text-gray-400 text-lg" />
                    <select
                      name="timeRequired"
                      value={formData.timeRequired}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 p-4 pl-12 pr-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      required
                    >
                      {timeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Special Instructions */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Instructions
                  </label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Child seat, extra luggage, accessibility needs, etc."
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white h-24 resize-none"
                    rows={4}
                  />
                </div>

                {/* Payment Mode */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <div className="relative">
                    <FaCreditCard className="absolute left-4 top-4 text-gray-400 text-lg" />
                    <select
                      name="paymentMode"
                      value={formData.paymentMode}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 p-4 pl-12 pr-12 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                    >
                      {paymentOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-12">
              <ButtonPrimary
                type="submit"
                className="px-16 py-5 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-linear-to-r from-primary to-blue-600 text-white"
              >
                Book Your Ride Now
              </ButtonPrimary>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center gap-12 mt-12 pt-12 border-t border-gray-200">
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