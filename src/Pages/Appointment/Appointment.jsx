import React, {  useState } from "react";
import Footer from "../Shared/Footer.jsx";
import AppointmentBanner from "./AppointmentBanner.jsx";
import AppointmentServices from "./AppointmentServices.jsx";
import AvailableAppointment from "./AvailableAppointment.jsx";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [serchCategory, setSearchCategory] = useState("");
  const getCategory = (name) => {
    setSearchCategory(name)
  }
  
  return (
    <div className="">
      <AppointmentBanner date={date} setDate={setDate} />
      <AppointmentServices getCategory={getCategory} date={date} />
      <AvailableAppointment serchCategory={serchCategory} />
      <Footer />
    </div>
  );
};

export default Appointment;
