import React, { useEffect, useState } from "react";
import ArrowDown from "../images/keyboard-arrow-down.svg";
import { ChevronDownIcon } from "@radix-ui/react-icons";

function Header() {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    setUserData(user);
  }, []);
  return (
    <>
      <header className="w-full bg-white h-16 py-2">
        <div className="container flex flex-col justify-end items-end text-right">
          <h3 className="flex items-center gap-3  text-[#2C3030]">
            {userData?.user?.email}
            <ChevronDownIcon />
          </h3>
          <h4 className="text-[#9A9C9C] text-[12px] leading-[18px] mr-6">
            Администратор компании
          </h4>
        </div>
      </header>
      <hr className="w-full bg-[#E8E8E8] h-[1px] " />
    </>
  );
}

export default Header;
