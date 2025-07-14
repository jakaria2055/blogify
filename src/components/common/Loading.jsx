import React from "react";
import {ClockLoader} from "react-spinners";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ClockLoader color="blue"/>
    </div>
  );
};

export default Loading;
