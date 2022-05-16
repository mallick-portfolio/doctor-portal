import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init.js";
import Loading from '../Shared/Loading'


const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />
  }
  if (user) {
    if (user) {
      navigate(from, { replace: true });
    }
  }

  const onSubmit = async (data, e) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-1/3 px-4 py-6 rounded-md shadow-2xl"
      >
        <h3 className="text-center text-2xl mb-3">Login</h3>
        <div className="mb-2">
          <p className="label-text mb-2">Email</p>
          <input
            type="email"
            {...register("email", {
              required: "Please enter your email address",
            })}
            placeholder="email"
            className="input input-bordered w-full max-w-sm"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-2">
          <p className="label-text mb-2">Password</p>
          <input
            type="password"
            {...register("password", {
              required: true || "Your Email Is Required",
            })}
            placeholder="Password"
            className="input input-bordered w-full max-w-sm"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
        </div>
        <p className="text-sm mb-4">Forgot Password ?</p>
        <div className="mb-2">
          <input
            type="submit"
            value={"Submit"}
            className="btn w-full bg-accent border-0"
          />
        </div>
        <div className="mb-2 text-center">
          <p>
            New to Doctors Portal?{" "}
            <Link to={"/register"} className="text-secondary cursor-pointer">
              Register
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

export default Login;
