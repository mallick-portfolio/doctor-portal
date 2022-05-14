import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import teeth from "../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard.jsx";
const Services = () => {
  const services = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      _id: 2,
      title: "Cavity Filling",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: teeth,
    },
  ];
  return (
    <div className="my-28 container">
      <h4 className="text-xl text-center text-secondary">OUR SERVICES</h4>
      <h2 className="text-3xl text-center text-neutral mb-8">
        Services We Provide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
