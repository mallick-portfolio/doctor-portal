import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div class="card p-4 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={service.img}
          alt="Shoes"
          class="rounded-xl w-auto"
        />
      </figure>
      <div class="card-body pt-2 items-center text-center">
        <h2 class="card-title">{service.title}</h2>
        <p>{service.des}</p>
        
      </div>
    </div>
  );
};

export default ServiceCard;
