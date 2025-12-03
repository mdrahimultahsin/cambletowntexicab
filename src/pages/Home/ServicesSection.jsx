import {useLoaderData} from "react-router";
import Container from "../../shared/Container";

const ServicesSection = () => {
  const serviceData = useLoaderData() || [];
  return (
    <section className="pt-30 mb-30">
      <Container>
        <div className="text-center">
          <h2 className="section-title">
            Our Taxi and Maxi Services in Campbelltown
          </h2>
          <p className="mt-4 text-base text-accent md:text-xl text-center max-w-6xl mx-auto leading-relaxed">
            At Campbelltown Taxi Cabs, we offer reliable and efficient taxi and
            maxi services for all your travel needs in Campbelltown and the
            surrounding areas. Whether you need a quick ride to Sydney Airport,
            a comfortable maxi taxi for group travel, or a special luxury
            transfer, we've got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {serviceData &&
            serviceData.map((service) => (
              <div
                key={service.service_id}
                className="bg-light px-8 py-5 rounded-xl border-b-10 border-primary"
              >
                <img
                  src={service.image}
                  alt={service.title + "Campbelltown Taxi Cabs"}
                  className="w-1/3 mb-8"
                />
                <h3 className="text-2xl md:text-3xl font-semibold my-3">
                  {service.title}
                </h3>
                <p className="text-accent md:text-lg">{service.description}</p>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
