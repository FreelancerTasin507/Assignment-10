import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Toaster } from "react-hot-toast";
import Loading from "../components/Loading/Loading";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <Toaster />
          <Header></Header>
          <Outlet></Outlet>
        </>
      )}
    </div>
  );
};

export default Main;
