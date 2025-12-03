import Container from "./Container";
import trustpilotImg from "../assets/trusted-networks/campbelltowntaxicab-network-trustpilot.png";
import googleReviewsImg from "../assets/trusted-networks/campbelltowntaxicabs-google-reviews.png";
import tripImg from "../assets/trusted-networks/campbelltowntaxicab-taxi-sydney-1.png";
import yelpImg from "../assets/trusted-networks/wav-campbelltowntaxicab-network-yellow-yelp.png";
const TrustedNetworks = () => {
  const networks = [
    {
      name: "Trustpilot",
      logo: trustpilotImg,
      link: "#",
    },
    {
      name: "Google Reviews",
      logo: googleReviewsImg,
      link: "#",
    },
    {
      name: "Tripadvisor",
      logo: tripImg,
      link: "#",
    },
    {
      name: "Yelp",
      logo: yelpImg,
      link: "#",
    },
  ];

  return (
    <section className="mt-2">
      <Container>
        <h2 className="text-primary text-2xl font-bold mb-6">
          Verified on Leading Networks
        </h2>
        <div className="flex items-center gap-6">
          {networks.map((network) => (
            <a
              key={network.name}
              href={network.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={network.logo}
                alt={network.name + "Campbelltown Taxi Cabs"}
                className="w-20 h-20 object-contain"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedNetworks;
