import Container from "./Container";
import ButtonPrimary from "./ButtonPrimary";
import {useState} from "react";

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
    returnTrip: "no",
    specialInstructions: "",
    paymentMode: "cash",
    // Airport fields
    airportPickupLocation: "",
    airportDropoffLocation: "",
    airportPickupDate: "",
    airportPickupTime: "",
  });

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
  };

  return (
    <section className="-mt-15 z-55 mb-16">
      <Container>
        <div className="bg-gray-color text-black pt-10 pb-6 rounded-md">
          <h1 className="text-2xl md:text-4xl font-playfair font-bold text-center text-primary px-2">
            Taxi Booking Services in CambellTown
          </h1>
          <form onSubmit={handleSubmit} className=" px-8 pt-6">
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
                    />
                  </div>
                  <div>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="input-class"
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
                    <input
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleInputChange}
                      placeholder="Pickup Address (Street No., Street Name, Suburb)"
                      className="input-class"
                    />
                  </div>
                  <div>
                    <input
                      name="dropoffAddress"
                      value={formData.dropoffAddress}
                      onChange={handleInputChange}
                      placeholder="Drop Off Address (Street No., Street Name, Suburb)"
                      className="input-class"
                    />
                  </div>
                </div>

                {/* Dropdowns Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleInputChange}
                      className="input-class"
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
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="input-class"
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
                        value="kia-carnival"
                      >
                        Kia Carnival
                      </option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="timeRequired"
                      value={formData.timeRequired}
                      onChange={handleInputChange}
                      className="input-class"
                    >
                      <option className="text-gray-600 font-bold" value="">
                        Time Required
                      </option>
                      <option className="text-gray-600 font-bold" value="asap">
                        As Soon As Possible
                      </option>
                      <option className="text-gray-600 font-bold" value="1h">
                        Within 1 Hour
                      </option>
                      <option className="text-gray-600 font-bold" value="2h">
                        Within 2 Hours
                      </option>
                      <option
                        className="text-gray-600 font-bold"
                        value="specific"
                      >
                        Specific Time
                      </option>
                    </select>
                  </div>
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
                    name="paymentMode"
                    value={formData.paymentMode}
                    onChange={handleInputChange}
                    className="input-class"
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
            {/* Airport Form */}
{formData.pickupType === "airport" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  name="airportPickupLocation"
                  value={formData.airportPickupLocation}
                  onChange={handleInputChange}
                  placeholder="Pickup Location (e.g., Sydney Airport Terminal 1)"
                  className="input-class"
                  required
                />
                <input
                  name="airportDropoffLocation"
                  value={formData.airportDropoffLocation}
                  onChange={handleInputChange}
                  placeholder="Drop Off Location"
                  className="input-class"
                  required
                />
                <input
                  name="airportPickupDate"
                  type="date"
                  value={formData.airportPickupDate}
                  onChange={handleInputChange}
                  className="input-class"
                  required
                />
                <input
                  name="airportPickupTime"
                  type="time"
                  value={formData.airportPickupTime}
                  onChange={handleInputChange}
                  className="input-class"
                  required
                />
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  placeholder="Special instructions"
                  className="input-class"
                  rows={4}
                />
                <select
                  name="paymentMode"
                  value={formData.paymentMode}
                  onChange={handleInputChange}
                  className="input-class"
                >
                  {["card", "bank-card", "cabcharge", "ttss"].map((mode) => (
                    <option key={mode} value={mode}>
                      Payment Mode: {mode.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {/* Submit Button */}
            <div className="flex justify-center">
              <ButtonPrimary type="submit" className="">
                Request Booking
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default BookingForm;
