import React from "react";
import CommonBtn from "../Shared/CommonBtn.jsx";
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
const Appoinment = () => {
  return (
    <div className="container" style={{  
      backgroundImage: `url(${appointment})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="sm:flex items-center my-28">
        <img
          src={doctor}
          className="max-w-lg -mt-20 flex-1 hidden md:block"
          alt=""
        />
        <div className="flex-1 p-2 sm:p-0 text-white">
          <h1 className="text-xl font-bold text-primary">Appointment</h1>
          <h1 className="font-bold text-3xl sm:text-5xl">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <CommonBtn>Get Started</CommonBtn>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
