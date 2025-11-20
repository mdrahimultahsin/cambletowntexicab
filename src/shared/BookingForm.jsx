import Container from "./Container";
import ButtonPrimary from "./ButtonPrimary";

const BookingForm = () => {
  return (
    <section className="w-full bg-gray-100 py-10">
      <Container>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 font-playfair">
          Book The Best Taxi/Maxi Van Service in Sydney
        </h2>

        {/* OPTIONS */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-lg font-medium text-accent">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="pickup" />
            Pickup from Anywhere in Sydney
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="pickup" />
            Pickup from Sydney Airport
          </label>
        </div>

        {/* FORM */}
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Name */}
          <input
            placeholder="Name"
            className="border border-border-color p-3 rounded md:col-span-2"
          />

          {/* Code */}
          <select className="border border-border-color p-3 rounded">
            <option>AU +61</option>
          </select>

          {/* Phone */}
          <input
            placeholder="Phone Number"
            className="border border-border-color p-3 rounded"
          />

          {/* Email */}
          <input
            placeholder="E-mail"
            className="border border-border-color p-3 rounded col-span-full"
          />

          {/* Pickup */}
          <input
            placeholder="Pickup Address (Street No., Street Name, Suburb)"
            className="border border-border-color p-3 rounded md:col-span-2 col-span-full"
          />

          {/* Dropoff */}
          <input
            placeholder="Drop Off Address (Street No., Street Name, Suburb)"
            className="border border-border-color p-3 rounded md:col-span-2 col-span-full"
          />

          {/* Passengers */}
          <select className="border border-border-color p-3 rounded">
            <option>No. of Passengers</option>
          </select>

          {/* Vehicle */}
          <select className="border border-border-color p-3 rounded">
            <option>Vehicle Type</option>
          </select>

          {/* Time */}
          <select className="border border-border-color p-3 rounded md:col-span-2 col-span-full">
            <option>Time Required</option>
          </select>

          {/* Return Trip */}
          <div className="col-span-full flex items-center gap-4 text-lg font-semibold mt-2">
            <span>Return Trip</span>
            <label className="flex items-center gap-1">
              <input type="radio" name="return" /> No
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="return" /> Yes
            </label>
          </div>

          {/* Special Instructions */}
          <textarea
            placeholder="Special Instructions"
            className="border border-border-color p-3 rounded col-span-full h-24"
          />

          {/* Payment Mode */}
          <select className="border border-border-color p-3 rounded col-span-full">
            <option>Payment Mode: Cash</option>
          </select>

          {/* Submit */}
          <div className="flex justify-center col-span-full mt-4">
            <ButtonPrimary type="submit" className="inline-block">
              Submit
            </ButtonPrimary>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default BookingForm;
