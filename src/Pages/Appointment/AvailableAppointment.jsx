import axios from "axios";
import React, { useEffect, useState } from "react";
import AppointmentDoctor from "./AppointmentDoctor.jsx";

const AvailableAppointment = ({ date }) => {
  const [treatments, setTreatments] = useState([]);
  useEffect(() => {
    const loadServices = async () => {
      const selectedData = await axios.get(`http://localhost:5000/services`);
      setTreatments(selectedData.data);
    };
    loadServices();
  }, []);
  return (
    <div className="container mb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {treatments.map((data) => (
          <AppointmentDoctor date={date} key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
