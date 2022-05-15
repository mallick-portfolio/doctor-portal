import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h4 className="text-xl ml-10 mb-2">Cavity Protection</h4>

          <div className="mb-2  text-center">
            <input
              disabled
              defaultValue={format(date, "PP")}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="mb-2  text-center">
            <input
              disabled
              defaultValue={treatment?.dataslot[1]?.slots[0]}
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="mb-2  text-center">
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="mb-2  text-center">
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="mb-2  text-center">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="mb-2 mx-10">
            <input type="submit" value="Submit" className="btn w-full bg-accent border-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
