import React, {  useState } from "react";
import Footer from "../Shared/Footer.jsx";
import AppointmentBanner from "./AppointmentBanner.jsx";
import AppointmentServices from "./AppointmentServices.jsx";
import AvailableAppointment from "./AvailableAppointment.jsx";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

   
  return (
    <div className="">
      <AppointmentBanner date={date} setDate={setDate} />
      <AppointmentServices date={date} />
      <AvailableAppointment date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
