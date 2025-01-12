import React from "react";
import Logo from "../images/header-logo.svg";
import NavItems from "./NavItems";

function Sidebar() {
  return (
    <>
      <div className="flex items-end ">
        <div className="min-h-screen min-w-[230px] max-w-[20%] h-full bg-[#F3F3F3] pt-4 pl-4">
          <div className="container">
            <div className="head">
              <img src={Logo} alt="" />
              <NavItems />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
