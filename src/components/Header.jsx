import React from "react";
import ArrowDown from "../images/keyboard-arrow-down.svg";

function Header() {
  return (
    <>
      <header className="min-w-[1118px] ">
        <div className="container flex justify-end">
          <div className="flex items-start justify-end gap-3 mt-4">
            <div className="text-right">
              <h1 className="text-[14px] leading-[18px] text-[#2C3030]">
                manager@mail.ru
              </h1>
              <h2 className="text-[#9A9C9C] text-[12px] leading-[18px]">
                Администратор компании
              </h2>
            </div>
            <div className="arrow">
              <img src={ArrowDown} alt="" />
            </div>
          </div>
        </div>
      </header>
      <hr className="h-[1px]  w-[1300px] bg-[#ffffff] mt-[13px]" />
    </>
  );
}

export default Header;
