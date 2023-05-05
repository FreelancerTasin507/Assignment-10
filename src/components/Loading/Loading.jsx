import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="ml-[45%] mt-40">
      <BallTriangle
      
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
