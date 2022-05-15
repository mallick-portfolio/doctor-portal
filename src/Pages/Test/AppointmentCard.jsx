import React from "react";

const AppointmentCard = ({ service,getCategory }) => {
  const handleSearchkey = (keyName) => {
    getCategory(keyName);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2
          onClick={() => handleSearchkey(service.category)}
          className="text-xl text-secondary cursor-pointer text-center"
        >
          {service.title}
        </h2>
      </div>
    </div>
  );
};

export default AppointmentCard;
