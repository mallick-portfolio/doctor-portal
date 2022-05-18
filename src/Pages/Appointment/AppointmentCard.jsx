import React from "react";

const AppointmentCard = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-xl text-secondary cursor-pointer text-center">
          {service.name}
        </h2>
      </div>
    </div>
  );
};

export default AppointmentCard;
