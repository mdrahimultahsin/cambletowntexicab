import Container from "./Container";
import ButtonPrimary from "./ButtonPrimary";
import {useState} from "react";
import PlacesInput from "../utils/PlacesInput";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {useNavigate} from "react-router";
const BookingForm = ({className, params, formTitle}) => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    pickupType: "anywhere",
    name: "",
    phone: "",
    email: "",
    pickupAddress: "",
    dropoffAddress: "",
    passengers: "",
    vehicleType: "",
    pickupDate: "",
    pickupTime: "",
    returnTrip: "no",
    specialInstructions: "",
    paymentMode: "",
    // Airport fields
    airportPickupLocation: "",
    airportDropoffLocation: "",
    airportPickupDate: "",
    airportPickupTime: "",
    flightNo: "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build message string
    let message = `
  <b style="font-weight:bold; font-size:24px">Customer Name:</b> ${formData.name} <br/>
  <b style="font-weight:bold; font-size:24px">Phone:</b> +${formData.phone} <br/>
  <b style="font-weight:bold; font-size:24px">Email:</b> ${formData.email} <br/>
  <b style="font-weight:bold; font-size:24px">Pickup Address:</b> ${formData.pickupAddress} <br/>
  <b style="font-weight:bold; font-size:24px">Dropoff Address:</b> ${formData.dropoffAddress} <br/>
  <b style="font-weight:bold; font-size:24px">Passengers:</b> ${formData.passengers} <br/>
  <b style="font-weight:bold; font-size:24px">Vehicle Type:</b> ${formData.vehicleType} <br/>
  <b style="font-weight:bold; font-size:24px">Pickup Date:</b> ${formData.pickupDate} <br/>
  <b style="font-weight:bold; font-size:24px">Pickup Time:</b> ${formData.pickupTime} <br/>
  <b style="font-weight:bold; font-size:24px">Return Trip:</b> ${formData.returnTrip} <br/>
  <b style="font-weight:bold; font-size:24px">Special Instructions:</b> ${formData.specialInstructions} <br/>
  <b style="font-weight:bold; font-size:24px">Payment Mode:</b> ${formData.paymentMode}
`;

    // Add airport details only if pickupType is airport
    if (formData.pickupType === "airport") {
      message += `
Airport Pickup Location: ${formData.airportPickupLocation}
Airport Dropoff Location: ${formData.airportDropoffLocation}
Airport Pickup Date: ${formData.airportPickupDate}
Airport Pickup Time: ${formData.airportPickupTime}
Flight No: ${formData.flightNo || ""}
`;
    }

    // Prepare template params
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
            navigate("/");
          }, 5000);
          setFormData({
            pickupType: "anywhere",
            name: "",
            phone: "",
            email: "",
            pickupAddress: "",
            dropoffAddress: "",
            passengers: "",
            vehicleType: "",
            pickupDate: "",
            pickupTime: "",
            returnTrip: "no",
            specialInstructions: "",
            paymentMode: "cash",
            airportPickupLocation: "",
            airportDropoffLocation: "",
            airportPickupDate: "",
            airportPickupTime: "",
            flightNo: "",
          });
        },
        () => {
          setLoading(false);
        }
      );
  };

  return (
    <section className={`-mt-15 z-55 mb-16 ${className}`}>
      <Container>
        <div className="bg-gray-color text-black pt-10 pb-6 rounded-md">
          <h1 className="section-title">
            {params
              ? params
              : formTitle
              ? formTitle
              : "Taxi Booking Services in CampbellTown"}
          </h1>
          <form onSubmit={handleSubmit} className=" px-8 pt-0">
            {/* Pickup Options */}
            <div className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-8 mb-4">
              {["anywhere", "airport"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="pickupType"
                    value={type}
                    checked={formData.pickupType === type}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="font-bold capitalize text-lg">
                    {type === "anywhere"
                      ? "🚖 Pickup from Anywhere in Sydney"
                      : "✈️ Pickup from Sydney Airport"}
                  </span>
                </label>
              ))}
            </div>
            {formData.pickupType === "anywhere" && (
              <>
                {/* Name, Phone, Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="input-class"
                      required
                    />
                  </div>
                  <div>
                    <PhoneInput
                      country={"au"}
                      value={formData.phone}
                      onChange={(phone) =>
                        setFormData((prev) => ({...prev, phone}))
                      }
                      placeholder="Enter phone number"
                      containerClass="w-full"
                      inputClass="input-class w-full! py-5! "
                      countryCodeEditable={true}
                      enableLongNumbers={true}
                      formatOnInit={false}
                      masks={{
                        au: "................................................................",
                        us: "..................................",
                        bd: "..................................",
                      }}
                      required
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="E-mail"
                      className="input-class"
                    />
                  </div>
                </div>

                {/* Address Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <PlacesInput
                      value={formData.pickupAddress}
                      onChange={(val) =>
                        setFormData((prev) => ({...prev, pickupAddress: val}))
                      }
                      placeholder="Pickup Address (Street No., Street Name, Suburb)"
                    />
                  </div>
                  <div>
                    <PlacesInput
                      value={formData.dropoffAddress}
                      onChange={(val) =>
                        setFormData((prev) => ({...prev, dropoffAddress: val}))
                      }
                      placeholder="Dropoff Address (Street No., Street Name, Suburb)"
                    />
                  </div>
                </div>

                {/* Dropdowns Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <select
                      aria-label="Passengers"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleInputChange}
                      className="input-class"
                      required
                    >
                      <option className="text-gray-600 font-bold" value="">
                        No. of Passengers
                      </option>
                      <option className="text-gray-600 font-bold" value="1">
                        1 Passenger
                      </option>
                      <option className="text-gray-600 font-bold" value="2">
                        2 Passengers
                      </option>
                      <option className="text-gray-600 font-bold" value="3">
                        3 Passengers
                      </option>
                      <option className="text-gray-600 font-bold" value="4">
                        4 Passengers
                      </option>
                      <option className="text-gray-600 font-bold" value="5">
                        5 Passengers
                      </option>
                      <option className="text-gray-600 font-bold" value="6+">
                        6+ Passengers
                      </option>
                    </select>
                  </div>
                  <div>
                    <select
                      aria-label="Vehicle Type"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="input-class"
                      required
                    >
                      <option className="text-gray-600 font-bold" value="">
                        Vehicle Type
                      </option>
                      <option
                        className="text-gray-600 font-bold"
                        value="easy-sedan"
                      >
                        Easy Sedan
                      </option>
                      <option
                        className="text-gray-600 font-bold"
                        value="luxury-vehicle"
                      >
                        Luxury Vehicle
                      </option>
                      <option
                        className="text-gray-600 font-bold"
                        value="suv-wagon"
                      >
                        Suv or Wagon
                      </option>
                      <option
                        className="text-gray-600 font-bold"
                        value="maxi-taxi"
                      >
                        Maxi Taxi
                      </option>
                      <option
                        className="text-gray-600 font-bold"
                        value="kia-carnival"
                      >
                        Kia Carnival
                      </option>
                      <option
                        className="text-gray-600 font-bold"
                        value="wheelchair-taxi-service"
                      >
                        Wheelchair Taxi Service
                      </option>
                      <option
                        className="text-gray-600 font-bold"
                        value="baby-seat-taxi"
                      >
                        Baby Seat Taxi
                      </option>
                    </select>
                  </div>
                </div>
                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <h2 className="text-center col-span-full font-bold text-accent">
                    Pickup Date & Time
                  </h2>
                  <input
                    name="pickupDate"
                    type="date"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    className="input-class"
                    required
                    placeholder="MM/DD/YYYY"
                  />
                  <input
                    name="pickupTime"
                    type="time"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    className="input-class"
                    placeholder="H:M:AM/PM"
                    required
                  />
                  {/* Date & Time of Landing */}
                </div>

                {/* Return Trip */}
                <div className="flex items-center gap-6 mb-4">
                  <span className="text-gray-700 font-bold">Return Trip</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="returnTrip"
                      value="no"
                      checked={formData.returnTrip === "no"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="returnTrip"
                      value="yes"
                      checked={formData.returnTrip === "yes"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                </div>

                {/* Special Instructions */}
                <div className="mb-4">
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Special instructions"
                    className="input-class"
                    rows={4}
                  />
                </div>

                {/* Payment Mode */}
                <div className="mb-6">
                  <select
                    aria-label="Payment Option"
                    name="paymentMode"
                    value={formData.paymentMode}
                    onChange={handleInputChange}
                    className="input-class"
                    required
                  >
                    <option className="text-gray-600 font-bold" value="card">
                      Payment Mode: Cash
                    </option>
                    <option
                      className="text-gray-600 font-bold"
                      value="bank-card"
                    >
                      Payment Mode: Bank Card
                    </option>
                    <option
                      className="text-gray-600 font-bold"
                      value="cabcharge"
                    >
                      Payment Mode: CabCharge
                    </option>
                    <option className="text-gray-600 font-bold" value="ttss">
                      Payment Mode: TTSS
                    </option>
                  </select>
                </div>
              </>
            )}
            {formData.pickupType === "airport" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Name & Contact */}
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="input-class"
                  required
                />

                <PhoneInput
                  country={"au"}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData((prev) => ({...prev, phone}))
                  }
                  placeholder="Enter phone number"
                  containerClass="w-full"
                  inputClass="input-class w-full! py-5! "
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  className="input-class"
                  required
                />

                {/* Terminal Dropdown */}
                <select
                  aria-label="Pickup Terminal"
                  name="airportPickupLocation"
                  value={formData.airportPickupLocation}
                  onChange={handleInputChange}
                  className="input-class"
                  required
                >
                  <option value="">Select Pickup Terminal</option>
                  <option value="international">International Terminal</option>
                  <option value="domestic">Domestic Terminal</option>
                </select>

                {/* Flight No & Dropoff */}
                <input
                  name="flightNo"
                  value={formData.flightNo || ""}
                  onChange={handleInputChange}
                  placeholder="Flight Number"
                  className="input-class"
                  required
                />
                <PlacesInput
                  value={formData.airportDropoffLocation}
                  onChange={(val) =>
                    setFormData((prev) => ({
                      ...prev,
                      airportDropoffLocation: val,
                    }))
                  }
                  placeholder="Dropoff Address (Street No., Street Name, Suburb)"
                />
                <h2 className="col-span-full text-center font-bold text-lg">
                  Date & Time
                </h2>
                {/* Date & Time of Landing */}
                <input
                  name="airportPickupDate"
                  type="date"
                  value={formData.airportPickupDate}
                  onChange={handleInputChange}
                  className="input-class"
                  required
                  placeholder="MM/DD/YYYY"
                />
                <input
                  name="airportPickupTime"
                  type="time"
                  value={formData.airportPickupTime}
                  onChange={handleInputChange}
                  className="input-class"
                  placeholder="H:M:AM/PM"
                  required
                />

                {/* Number of Passengers */}
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  className="input-class"
                  required
                >
                  <option value="">No. of Passengers</option>
                  {[1, 2, 3, 4, 5, "6+"].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Passenger" : "Passengers"}
                    </option>
                  ))}
                </select>

                {/* Vehicle Type */}
                <select
                  aria-label="Vehicle Type"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="input-class"
                  required
                >
                  <option value="">Vehicle Type</option>
                  <option value="easy-sedan">Easy Sedan</option>
                  <option value="luxury-vehicle">Luxury Vehicle</option>
                  <option value="suv-wagon">SUV or Wagon</option>
                  <option value="kia-carnival">Kia Carnival</option>
                  <option value="maxi-taxi">Maxi Taxi</option>
                  <option value="wheelchair-taxi-service">
                    Wheelchair Taxi Service
                  </option>
                  <option value="baby-seat-taxi">
                    Baby Seat Taxi
                  </option>
                </select>

                {/* Payment Mode */}
                <select
                  aria-label="Payment Mode"
                  name="paymentMode"
                  value={formData.paymentMode}
                  onChange={handleInputChange}
                  className="input-class"
                  required
                >
                  <option value="cash">Payment Mode: Cash</option>
                  <option value="bank-card">Payment Mode: Bank Card</option>
                  <option value="cabcharge">Payment Mode: CabCharge</option>
                  <option value="ttss">Payment Mode: TTSS</option>
                </select>

                {/* Special Instructions */}
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  placeholder="Special instructions"
                  className="input-class"
                  rows={2}
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <ButtonPrimary type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Request Booking"}
              </ButtonPrimary>
            </div>
          </form>
          {showPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center relative">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  🎉 Congratulations!
                </h2>
                <p className="text-gray-700 mb-6">
                  You have successfully submitted your service request. We will
                  contact you soon.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BookingForm;
