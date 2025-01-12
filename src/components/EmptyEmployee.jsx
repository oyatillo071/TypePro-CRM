import React from "react";
import Home from "../images/store-mall-directory.svg";

function EmptyEmployee() {
  return (
    <div>
      <div className="grid place-items-center  min-h-screen bg-white">
        <div className="content-center text-center">
          <img src={Home} alt="home logo" />
          <h1 className="text-[#9A9C9C] font-medium text-2xl leading-[30px] translate-x-1">
            Malumot yo'q
          </h1>
        </div>
      </div>
    </div>
  );
}

export default EmptyEmployee;
