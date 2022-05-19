import React, {  useState } from "react";
import Footer from "../Shared/Footer.jsx";
import AppointmentBanner from "./AppointmentBanner.jsx";
import AvailableAppoinment from "./AvailableAppoinment.jsx";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

   
  return (
    <div className="">
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppoinment date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
