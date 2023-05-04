import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img
        className="mx-auto mt-20"
        src="../../../public/Images/ErrorImage/errorPage.png"
        alt=""
      />
      <Link
        className="text-xl font-medium  bg-slate-800 hover:text-teal-300 duration-1000"
        to="/"
      >
        {" "}
        <button className=" button-container btn mt-10 ">
          Back To home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
