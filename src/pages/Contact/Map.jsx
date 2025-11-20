import React from "react";

const Map = () => {
  return (
    <div className="mt-8 w-full h-80">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.970080378483!2d150.80412397544785!3d-34.07028122952234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x800f99ea78140e67%3A0x4dda23b5433d9e64!2sCampbelltown%20Macarthur%20Taxi!5e0!3m2!1sen!2sbd!4v1763669200929!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location"
      ></iframe>
    </div>
  );
};

export default Map;
