import React, { useState } from "react";
import Home from "../images/store-mall-directory.svg";

function Employee() {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div>
      {!isEmpty && (
        <div className="grid place-items-center  min-h-screen bg-white">
          <div className="content-center text-center">
            <img src={Home} alt="home logo" />
            <h1 className="text-[#9A9C9C] font-medium text-2xl leading-[30px] translate-x-1">
              Malumot yo’q
            </h1>
          </div>
        </div>
      )}
      {isEmpty && (
        <div>
          <h1>isEmpty state tog'ri ishlamoqda</h1>
        </div>
      )}
    </div>
  );
}

export default Employee;
