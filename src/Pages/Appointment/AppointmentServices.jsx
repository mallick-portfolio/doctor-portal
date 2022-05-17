import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard.jsx";

const AppointmentServices = ({ date,getCategory }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-shore-69324.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container my-16">
      <div>
        <h4 className="text-2xl text-center text-secondary">
          Available Services on {format(date, "PP")}
        </h4>
        <h2 className="text-xl text-center text-[#939393] mb-8">
          Please select a service.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AppointmentCard getCategory={getCategory} key={service._id} service={service}  />
        ))}
      </div>
    </div>
  );
};

export default AppointmentServices;
