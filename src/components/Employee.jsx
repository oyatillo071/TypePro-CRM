import React, { useState } from "react";
import Home from "../images/store-mall-directory.svg";

function Employee() {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <div>
      {!isEmpty && (
        <div className="mt-[213px] ml-[-180px]">
          <img src={Home} alt="" />
          <h1 className="text-[#9A9C9C] font-medium text-2 leading-[30px] translate-x-1">
            Malumot yo’q
          </h1>
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
