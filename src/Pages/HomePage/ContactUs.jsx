import React from "react";
import appoinment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <div className="my-28 py-16" style={{  
      backgroundImage: `url(${appoinment})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div>
        <h4 className="text-xl text-center text-secondary">OUR SERVICES</h4>
        <h2 className="text-3xl text-center text-white mb-8">
          Services We Provide
        </h2>
      </div>
      <div className="text-center px-2 sm:px-0">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Email address"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="mb-2">
          <textarea
            className="textarea textarea-bordered w-full max-w-sm"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="mb-2">
          <input
            type="submit"
            value={"Submit"}
            className="btn bg-gradient-to-r text-white from-secondary to-primary border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
