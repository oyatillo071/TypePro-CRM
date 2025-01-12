import React from "react";
import { navItems } from "../constants";
import NavItem from "./NavItem";

function NavItems() {
  return (
    <div className="mt-[28px]">
      {navItems.length > 0 &&
        navItems.map(function (value, index) {
          return <NavItem key={index} data={value} />;
        })}
    </div>
  );
}

export default NavItems;
