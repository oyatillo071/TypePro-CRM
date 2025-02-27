import React from "react";
import { NavLink } from "react-router-dom";
import parse from "html-react-parser";

function NavItem(props) {
  const { title, img, link } = props.data;
  // console.log(props);
  return (
    <div>
      <NavLink
        to={link}
        className="flex items-center gap-3 p-3 mt-2  cursor-pointer  font-medium   text-[#2C3030] "
      >
        <img src={img.src} alt={img.alt} className="filter grayscale" />
        {title}
      </NavLink>
    </div>
  );
}

export default NavItem;
