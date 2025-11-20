import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import sedanCarImg from "../assets/Easy-Sedan.png";
import luxuryVehicleImg from "../assets/Luxury-Vehicle.png";
import suvWagonImg from "../assets/Suv-Wagon.png";
import carnivalImg from "../assets/Kia-Carnival.png";

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
            className=" mx-auto"
            alt="Easy Sedan"
          />
          <p className="-mt-15 text-xl">Easy Sedan</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={luxuryVehicleImg}
            className="mx-auto "
            alt="Luxury Vehicle"
          />
          <p className="-mt-15 text-xl">Luxury Vehicle</p>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={suvWagonImg}
            className="mx-auto "
            alt="Suv or Wagon"
          />
          <p className="-mt-10 text-xl">Suv or Wagon</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carnivalImg}
            className="mx-auto h-full "
            alt=""
          />
          <p className="-mt-10 text-xl">Kia Carnival</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
