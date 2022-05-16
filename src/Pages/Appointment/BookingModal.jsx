import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init.js";

const BookingModal = ({ appoionData, date, setAppoionData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [user, loading, error] = useAuthState(auth);
  const onSubmit = async (data, e) => {
    console.log(data);
    setAppoionData(null)
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <form onSubmit={handleSubmit(onSubmit)} className="modal-box">
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
            <select
              {...register("time", {
                required: true,
                value: appoionData[0],
              })}
              className="select select-bordered w-full max-w-sm"
            >
              {appoionData &&
                appoionData.map((data, i) => (
                  <option value={data} key={i}>
                    {data}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-2  text-center">
            <input
              disabled
              defaultValue={user?.displayName}
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="mb-2  text-center">
            <input
              disabled
              defaultValue={user?.email}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          <div className="mb-2  text-center">
            <input
              {...register("phone", {
                required: true,
                value: "",
              })}
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-sm"
            />
          </div>

          <div className="mb-2 mx-10">
            <input
              type="submit"
              value="Submit"
              className="btn w-full bg-accent border-0"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
