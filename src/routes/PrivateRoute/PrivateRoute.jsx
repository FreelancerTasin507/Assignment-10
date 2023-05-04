import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const {  userInfo ,loading} = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    <p>Loading....</p> ;
  }
  if(userInfo){
    return children
  }

  return <Navigate state={{from: location}} to='/login' replace ></Navigate>;
};

export default PrivateRoute;
