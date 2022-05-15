import axios from "axios";
import React, { useEffect } from "react";

const AvailableAppointment = ({serchCategory}) => {
  
  
  useEffect(() => {
    const loadServices = async () => {
      const selectedData = await axios.get(
        `http://localhost:5000/services/${serchCategory}`
      );
      console.log(selectedData);
      
    };
    loadServices();
  }, [serchCategory]);
  return (
    <div className="container">
      <div>
        <h4 className="text-2xl text-center text-secondary">
          Available slots for Teeth Orthodontics.
        </h4>
      </div>
    </div>
  );
};

export default AvailableAppointment;
