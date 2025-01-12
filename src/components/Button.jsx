import React from "react";

function Button(props) {
  const { text, bgColor, type } = props.data;
  // console.log(bgColor, type, text);
  return (
    <button
      type={type}
      className={`bg-${bgColor} px-4 py-3 rounded-lg text-white mt-6`}
    >
      {text}
    </button>
  );
}

export default Button;
