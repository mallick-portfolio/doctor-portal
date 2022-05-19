import { format } from "date-fns";
import React, {  useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading.jsx";
import AppointmentCard from "./AppointmentCard.jsx";
import BookingModal from "./BookingModal.jsx";

const AvailableAppoinment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
const formated = format(date, "PP")

  const { isLoading, error, data : services } = useQuery(["available",formated], () =>
    fetch(`http://localhost:5000/available?date=${formated}`).then((res) => res.json())
  );
  if(isLoading){
    return <Loading />
  }

  return (
    <div>
      <h4 className="text-xl text-center text-secondary">
        Available Services on {format(date, "PP")}
      </h4>
      <h2 className="text-sm text-center text-neutral mb-8">
        Please select a service.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AppointmentCard
            setTreatment={setTreatment}
            service={service}
            key={service._id}
            date={date}
          />
        ))}
        {treatment && (
          <BookingModal
            setTreatment={setTreatment}
            date={date}
            treatment={treatment}
          />
        )}
      </div>
    </div>
  );
};

export default AvailableAppoinment;
