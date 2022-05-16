import axios from "axios";
import React, { useEffect, useState } from "react";
import AppointmentDoctor from "./AppointmentDoctor.jsx";
import BookingModal from "./BookingModal.jsx";

const AvailableAppointment = ({ serchCategory, date }) => {
  const [treatment, setTreatment] = useState(null);
  const [appoionData, setAppoionData] = useState(null);
  useEffect(() => {
    const loadServices = async () => {
      const selectedData = await axios.get(
        `http://localhost:5000/services/${
          serchCategory ? serchCategory : "dental"
        }`
      );
      setTreatment(selectedData.data);
    };
    loadServices();
  }, [serchCategory]);
  return (
    <div className="container mb-28">
      <div>
        <h4 className="text-2xl text-center text-secondary mb-4">
          Available slots for {treatment?.title}.
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {treatment?.dataslot.map((data, index) => (
          <AppointmentDoctor date={date} setAppoionData={setAppoionData} key={index} data={data} />
        ))}
      </div>
      <div>{appoionData && <BookingModal date={date} appoionData={appoionData} setAppoionData={setAppoionData} />}</div>
    </div>
  );
};

export default AvailableAppointment;
