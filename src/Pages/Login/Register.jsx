import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import Loading from "../Shared/Loading.jsx";
import { toast } from "react-toastify";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      toast.success("Your SignUp Successfull");
      navigate("/");
    }
  }, [navigate, user]);

  useEffect(()=> {
    if (error || uError) {
      toast.warning('Your SignUp failed. Please try again')
    }
  }, [error, uError])
  if (loading || updating) {
    return <Loading />;
  }

  const onSubmit = async (data, e) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-1/3 px-4 py-6 rounded-md shadow-2xl"
      >
        <h3 className="text-center text-2xl mb-3">Sign Up</h3>
        <div className="mb-1">
          <p className="label-text mb-1">Name</p>
          <input
            {...register("name", {
              required: "Please enter your Name",
              value: "",
            })}
            placeholder="Name"
            className="input input-bordered w-full max-w-sm"
          />
          <p className="text-red-500">
            {errors.name?.type === "required" && "* Name is required"}
          </p>
        </div>
        <div className="mb-1">
          <p className="label-text mb-1">Email</p>
          <input
            type={"email"}
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value:
                  // eslint-disable-next-line no-useless-escape
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email address",
              },
            })}
            placeholder="email"
            className="input input-bordered w-full max-w-sm"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-1">
          <p className="label-text mb-1">Password</p>
          <input
            type={"password"}
            {...register("password", {
              required: true,
              maxLength: {
                value: 15,
                message: "Max length is 15",
              },
              minLength: {
                value: 8,
                message: "Minimum length is 8",
              },
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              //   message:
              //     "Your password must contains lower , upper, numeric  character and one special character",
              // },
            })}
            placeholder="Password"
            className="input input-bordered w-full max-w-sm"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
        </div>
        <div className="mb-1">
          <p className="label-text mb-1">Confirm Password</p>
          <input
            type={"password"}
            {...register("confirm_password", {
              required: true,
              validate: (val) => {
                if (watch("password") !== val) {
                  return "Your passwords do no match";
                }
              },
            })}
            placeholder="Password"
            className="input input-bordered w-full max-w-sm"
          />
          {errors.confirm_password && (
            <p className="text-red-500">{errors.confirm_password.message}</p>
          )}
        </div>
        <div className="mb-1">
          <input
            disabled={!watch("password") || !watch("name") || !watch("email")}
            type="submit"
            value={"Submit"}
            className="btn w-full mt-2 cursor-pointer bg-accent border-0"
          />
        </div>
        <div className="mb-1 text-center">
          <p>
            Already Have an Account {""}
            <Link to={"/login"} className="text-secondary cursor-pointer">
              Login Now
            </Link>
          </p>
        </div>
        <div className="divider">OR</div>
        <button className="btn text-center bg-white text-neutral border-black hover:text-white w-full">
          CONTINUE WITH GOOGLE
        </button>
      </form>
    </div>
  );
};

export default Register;
