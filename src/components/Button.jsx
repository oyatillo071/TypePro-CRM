import React from "react";

function Button({ text, bgColor = "lightGreen", type, variant }) {
  if (variant == "greenSubmit") {
    return (
      <button
        type={type}
        className={`bg-${bgColor} px-4 py-3 rounded-lg text-white mt-6`}
      >
        {text}
      </button>
    );
  } else {
    <button className="border px-2 py-1">{text}</button>;
  }
}

export default Button;
