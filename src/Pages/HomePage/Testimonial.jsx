import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard.jsx";

import "./testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      location: "California",
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
    {
      _id: 4,
      name: "Winson Herry",
      location: "California",
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 5,
      name: "Winson Herry",
      location: "California",
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 6,
      name: "Winson Herry",
      location: "California",
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <div className="container my-28">
      <h4 className="text-xl text-secondary">Testimonial</h4>
      <h2 className="text-3xl text-neutral mb-12">
        What Our Patients SaysServices We Provide
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 320px
          100: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
