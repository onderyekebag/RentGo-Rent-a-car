import React from "react";
import "./slider.scss";
//? Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
//? Slider İmages
import slider1 from "../../../../assets/img/slider/slider11.jpg"; //! 1 or 11
import slider2 from "../../../../assets/img/slider/slider2.jpg";
import slider3 from "../../../../assets/img/slider/slider5.jpg";
import { Button } from "react-bootstrap";
const Slider = () => {
  return (
    <Swiper
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Pagination, EffectFade]}
      className="slider"
    >
      <SwiperSlide>
        <div className="content">Timeless Elegance on Every Journey</div>
        <img src={slider1} alt="Rent a car" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="content">Quality Cars with Unlimited Miles</div>
        <img src={slider2} alt="Rent a car" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="content">Best Rental Cars In Your Location</div>
        <img src={slider3} alt="Rent a car" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
