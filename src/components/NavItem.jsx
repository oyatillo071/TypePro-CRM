import React from "react";

function NavItem(props) {
  const { title, img } = props.data;
  console.log(props);
  return (
    <div>
      <div className="flex items-center gap-3 p-3 mt-2 rounded-lg cursor-pointer navigation">
        <img src={img.src} alt={`${img.alt}`} />
        <p className="font-medium text-[14px] leading-[18px] text-[#2C3030] opacity-40">
          {title}
        </p>{" "}
      </div>
    </div>
  );
}

export default NavItem;
