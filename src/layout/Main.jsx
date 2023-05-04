import React from "react";
import { Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import { Toaster } from 'react-hot-toast';

const Main = () => {
  

  return (
    <div>
      <Toaster/>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
