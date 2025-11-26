import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import sedanCarImg from "/campbelltown-easy-sedan-img.png";
import luxuryVehicleImg from "/campbelltown-luxury-vehicle.png";
import suvWagonImg from "/campbelltown-suv-wagon.png";
import carnivalImg from "/campbelltown-kia-carnival-img.png";

const Carousel = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={sedanCarImg}
            className="w-full object-cover  mx-auto"
            alt="Easy Sedan Car Campbelltown Taxi Cabs"
          />
          <p className="-mt-15 text-xl">Easy Sedan</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={luxuryVehicleImg}
            className="w-full object-cover mx-auto "
            alt="Luxury Taxi Vehicle Campbelltown Taxi Cabs"
          />
          <p className="-mt-15 text-xl">Luxury Vehicle</p>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={suvWagonImg}
            className="w-full object-cover mx-auto "
            alt="Suv or Wagon Car Campbelltown Taxi Cabs"
          />
          <p className="-mt-10 text-xl">Suv or Wagon</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carnivalImg}
            className="w-full object-cover mx-auto h-full "
            alt="Kia Carnival Car Campbelltown Taxi Cabs"
          />
          <p className="-mt-10 text-xl">Kia Carnival</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
