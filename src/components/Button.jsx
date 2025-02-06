import React from "react";

function Button(props) {
  const { text, bgColor, type, textColor = "white" } = props.data;
  // console.log(bgColor, type, text);
  return (
    <button
      type={type}
      className={`bg-${bgColor} px-4 py-3  rounded-lg  ${
        bgColor != "white " ? " border " : " border-none "
      }  mt-6 text-${textColor} `}
    >
      {text}
    </button>
  );
}

export default Button;
