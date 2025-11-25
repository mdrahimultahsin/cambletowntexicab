import {useEffect, useRef, useState} from "react";
import Container from "../../shared/Container";
import googleLogo from "../../assets/google-logo.webp";
import {IoMdStar, IoIosStarHalf} from "react-icons/io";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Loading from "../../shared/Loading";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const swiperRef = useRef();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_maps_api_key
    }&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      service.getDetails(
        {
          placeId: import.meta.env.VITE_maps_placeId,
          fields: ["name", "rating", "reviews"],
        },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setReviews(place.reviews || []);
          } else {
            console.error("Google Places error:", status);
          }
        }
      );
    };

    document.body.appendChild(script);
  }, []);

  // Helper function to render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<IoMdStar key={i} className="text-yellow-500" size={20} />);
      } else if (rating >= i - 0.5) {
        stars.push(
          <IoIosStarHalf key={i} className="text-yellow-500" size={20} />
        );
      } else {
        stars.push(<IoMdStar key={i} className="text-gray-300" size={20} />);
      }
    }
    return stars;
  };

  return (
   <section className="mt-16 md:mt-24">
  <Container>
    {/* Section header */}
    <div className="text-center mb-10 px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold font-playfair text-primary">
        What Our Customers Say About Campbelltown Taxi Cabs
      </h1>
      <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
        Hear from our satisfied customers who trust us for reliable and
        comfortable taxi services across Melbourne. Your feedback motivates us
        to provide the best experience every time.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {/* Google Rating */}
      <div className="flex justify-center mb-4 md:mb-0 md:flex-row items-center md:items-center gap-4 md:gap-2 col-span-1 ">
        <img className="w-16 md:w-24" src={googleLogo} alt="google-logo" />
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold text-primary">Excellent</h2>
          <div className="mt-2 flex flex-col md:flex-row items-center md:items-center gap-2">
            <h5 className="font-black text-orange-500 text-xl md:text-2xl">4.9</h5>
            <div className="flex items-center">
              <IoMdStar size={20} className="text-orange-500" />
              <IoMdStar size={20} className="text-orange-500" />
              <IoMdStar size={20} className="text-orange-500" />
              <IoMdStar size={20} className="text-orange-500" />
              <IoIosStarHalf size={20} className="text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Reviews slider */}
      <div className="col-span-1 md:col-span-2 relative ">
        {reviews.length > 0 ? (
          <>
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 3000 }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-md flex flex-col h-50 bg-gray-50 ">
                    {/* Top section: author img & name */}
                    <div className="flex items-center mb-2">
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-sm md:text-lg font-semibold">
                          {review.author_name}
                        </h2>
                        <small className="text-gray-500 text-xs md:text-sm">
                          {review.relative_time_description}
                        </small>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex mb-2">{renderStars(review.rating)}</div>

                    {/* Review text */}
                    <p className="text-gray-700 text-sm md:text-base">
                      {review.text.slice(0, 82) + "."}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 md:p-3 rounded-full shadow-lg z-10"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 md:p-3 rounded-full shadow-lg z-10"
            >
              <FaChevronRight />
            </button>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  </Container>
</section>

  );
};

export default Reviews;
