import { useLoaderData } from "react-router";
import Container from "../../shared/Container";

const Services = () => {
  
  const serviceData = useLoaderData() || [];

  return (
    <div className="py-30">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold font-playfair text-primary">
            Our Maxi Cabs Services in Sydney
          </h2>
          <p className="text-lg mt-6 text-accent">
            Looking for a maxi taxi sydney airport for groups, corporate
            transfers, group transfers, and large families going to, or coming
            from, Sydney airport, cruise maxi transfers, wheelchair taxi maxi
            Sydney, airport transfers, or any other events? Get a maxi cab price
            or make an online reservation—we are here to help with all your
            needs!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {serviceData && serviceData?.map((service) => (
            <div key={service.service_id} className="bg-light p-8 rounded-lg">
              <img src={service.image} alt={service.title} className="w-1/3 mb-8" />
              <h3 className="text-2xl md:text-3xl font-semibold my-3">{service.title}</h3>
              <p className="text-accent md:text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
