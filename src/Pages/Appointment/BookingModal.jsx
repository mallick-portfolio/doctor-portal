import { format } from "date-fns";
import React from "react";
import auth from "../../firebase.init.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment }) => {
  console.log(treatment)
  const [user] = useAuthState(auth);
  const {  name, available } = treatment;
  const { register, handleSubmit } = useForm();

  const formateDate = format(date, "PP");
  const onSubmit = async (data, e) => {
    await axios
      .post("http://localhost:5000/booking", {
        ...data,
        name,
        date: formateDate,
      })
      .then((res) => {
        console.log(res.data)
        if (res.data.success) {
          console.log('hello')
          toast(
            `Your appoiment successfully  ${formateDate} ${res?.data?.booking?.time}`
          );
        } else {
          toast.warning(
            `Your already appoiment ${formateDate} ${res?.data?.booking?.time} `
          );
        }
      });
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-4 py-6 rounded-md"
          >
            <h3 className="text-2xl mb-3">{name}</h3>
            <div className="mb-2">
              <input
                disabled
                value={format(date, "PP")}
                placeholder="email"
                className="input input-bordered w-full max-w-sm"
              />
            </div>
            <div className="mb-2">
              <select
                {...register("time")}
                className="select select-bordered w-full max-w-sm"
              >
                {available.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <input
                disabled
                {...register("patientName", {
                  value: user?.displayName,
                })}
                placeholder="Full Name"
                className="input input-bordered w-full max-w-sm"
              />
            </div>
            <div className="mb-2">
              <input
                disabled
                {...register("patient", {
                  value: user?.email,
                })}
                placeholder="Email"
                className="input input-bordered w-full max-w-sm"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                {...register("phone", {
                  required: "Your phone Is Required",
                  value: "",
                })}
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-sm"
              />
            </div>

            <div className="mb-2">
              <input
                type="submit"
                value={"Submit"}
                className="btn w-full bg-accent border-0"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
