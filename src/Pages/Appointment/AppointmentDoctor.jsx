import React from "react";

const AppointmentDoctor = ({ data }) => {
  const { slots, slotname } = data;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl text-secondary text-center">{slotname}</h2>
        <p className="text-sm text-accent text-center">{slots[0]}</p>
        <div className="text-center mt-4">
          <button disabled={slots.length === 0} className="btn bg-gradient-to-r text-white from-secondary to-primary border-0">
            Book Appoinment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDoctor;
