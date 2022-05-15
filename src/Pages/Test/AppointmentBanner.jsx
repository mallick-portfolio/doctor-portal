import React from "react";
import doctorChair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({date, setDate}) => {
  return (
    <div className="sm:flex justify-center items-center md:flex-row-reverse my-10 container">
      <div className="lg:basis-1/2">
        <img
          src={doctorChair}
          className="lg:max-w-lg rounded-lg shadow-2xl"
          alt=""
        />
      </div>
      <div className="lg:basis-1/2">
        <DayPicker mode="single" selected={date} onSelect={setDate} />
      </div>
    </div>
  );
};

export default AppointmentBanner;
