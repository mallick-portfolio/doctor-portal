import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const ContactLocation = () => {
  const data = [
    {
      _id: 1,
      title: "Opening Hours",
      des: "Lorem Ipsum is simply dummy text of the pri",
      img: clock,
      bgClass: "bg-gradient-to-r text-white from-secondary to-primary",
    },
    {
      _id: 2,
      title: "Visit our location",
      des: "Brooklyn, NY 10036, United States",
      img: marker,
      bgClass: "bg-accent",
    },
    {
      _id: 3,
      title: "Contact us now",
      des: "+000 123 456789",
      img: phone,
      bgClass: "bg-gradient-to-r text-white from-secondary to-primary",
    },
  ];
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-28 mx-auto">
      {data.map((ser) => (
        <>
          <div class={`hero ${ser.bgClass} rounded-2xl`}>
            <div class="hero-content flex-col lg:flex-row">
              <img
                src={ser.img}
                class="max-w-sm rounded-lg shadow-2xl" alt={ser.title}
              />
              <div>
                <h1 class="text-2xl text-white font-bold">{ser.title}</h1>
                <p class="py-1 md:py-2 lg:py-3 text-white">
                  {ser.des}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </section>
  );
};

export default ContactLocation;
