import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="lg:w-1/3 px-4 py-6 rounded-md shadow-2xl">
        <h3 className="text-center text-2xl mb-3">Sign Up</h3>
        <div className="mb-1">
          <p className="label-text mb-1">Name</p>
          <input
            type="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="mb-1">
          <p className="label-text mb-1">Email</p>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="mb-1">
          <p className="label-text mb-1">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="mb-1">
          <p className="label-text mb-1">Confirm Password</p>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div class="form-control">
          <label class="flex my-4 cursor-pointer">
            <input
              type="checkbox"
              checked="checked"
              class="checkbox mr-3  checkbox-primary"
            />
            <span class="label-text">Remember me</span>
          </label>
        </div>
        <div className="mb-1">
          <input
            type="submit"
            value={"Submit"}
            className="btn w-full bg-accent border-0"
          />
        </div>
        <div className="mb-1 text-center">
          <p>
            Already Have an Account {""}
            <span className="text-secondary">Login Now</span>
          </p>
        </div>
        <div className="divider">OR</div>
        <button className="btn text-center bg-white text-neutral border-black hover:text-white w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Register;
