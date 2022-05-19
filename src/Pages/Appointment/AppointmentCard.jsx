import React from "react";

const AppointmentCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{slots[0]}</p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            htmlFor="my-modal-6"
            className="btn bg-gradient-to-r text-white from-secondary to-primary border-0"
          >
            open modal
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
