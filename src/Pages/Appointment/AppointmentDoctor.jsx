import React from "react";

const AppointmentDoctor = ({ data, setAppoionData }) => {
  const { slots, slotname } = data;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl text-secondary text-center">{slotname}</h2>
        <p
          className={`text-xl text-center ${
            slots.length ? "text-accent" : "text-red-500"
          }`}
        >
          {slots.length ? slots[0] : "No Slot Available"}
        </p>
        <div className="text-center mt-4">
          <button onClick={() => setAppoionData(slots)}>
            <label
              htmlFor="booking-modal"
              disabled={slots.length === 0}
              className={`btn text-white ${
                slots.length
                  ? "bg-gradient-to-r  from-secondary to-primary"
                  : "bg-neutral"
              } border-0`}
            >
              open modal 
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDoctor;
