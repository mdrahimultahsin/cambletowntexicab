
import Container from "../../shared/Container";

const Reviews = () => {
  return (
    <div className="mt-30">
      <Container>
      <h1 className="text-4xl font-bold font-playfair text-center text-primary">
        Cambeltown Taxi Cabs Reviews
      </h1>
        {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          class="elfsight-app-52eaab94-deb0-45d2-ab29-8d9ba4c369d2"
          data-elfsight-app-lazy
        ></div>
      </Container>
    </div>
  );
};

export default Reviews;
