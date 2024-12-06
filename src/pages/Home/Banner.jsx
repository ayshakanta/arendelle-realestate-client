import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
