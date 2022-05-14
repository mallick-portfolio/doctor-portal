import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={service.img}
          alt="Shoes"
          className="rounded-xl w-auto"
        />
      </figure>
      <div className="card-body pt-2 items-center text-center">
        <h2 className="card-title">{service.title}</h2>
        <p>{service.des}</p>
        
      </div>
    </div>
  );
};

export default ServiceCard;
