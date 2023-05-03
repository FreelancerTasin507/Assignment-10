import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-20 w-[410px] mx-auto">
      <form className="border p-10 shadow-2xl">
        <h1 className="text-5xl font-semibold mb-5 ">Register Please</h1>
        <div>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full px-3 py-2 mb-5 rounded-xl"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            id="photo"
            name="photo"
            type="text"
            autoComplete="photo"
            required
            className="w-full px-3 py-2 mb-5 rounded-xl"
            placeholder="Photo URL"
          />
        </div>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 mb-5 rounded-xl"
            placeholder="Email address"
          />
        </div>

        <div>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full px-3 py-2 rounded-xl mb-3"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>
          <p className="mt-3 text-slate-500">Already Have An Accout ? <Link className="text-blue-700" to="/login">Login</Link></p>
        <input className="btn w-full mt-5" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
