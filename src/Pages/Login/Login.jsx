import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="lg:w-1/3 px-4 py-6 rounded-md shadow-2xl">
        <h3 className="text-center text-2xl mb-3">Login</h3>
        <div className="mb-2">
          <p class="label-text mb-2">Email</p>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="mb-2">
          <p class="label-text mb-2">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-sm"
          />
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
            <span className="text-secondary">Create new account</span>
          </p>
        </div>
        <div class="divider">OR</div>
        <button className="btn text-center bg-white text-neutral border-black hover:text-white w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
