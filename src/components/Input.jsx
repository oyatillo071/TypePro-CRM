import React, { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

function Input(props) {
  const { labelText, placeholderText, id, type } = props.data;
  const [isEyeHide, setIsEyeHide] = useState("false");

  if (type == "text") {
    return (
      <div className="flex flex-col items-start gap-3">
        <label className="text-xs" htmlFor={id}>
          {labelText}
        </label>
        <input
          type={type}
          id={id}
          className="border px-3 py-2 w-full rounded-lg "
          placeholder={placeholderText}
        />
      </div>
    );
  }

  if (type == "password") {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-xs" htmlFor={id}>
          {labelText}
        </label>
        <div className="border px-3 py-2 w-full rounded-lg flex items-center justify-between">
          <input
            type={isEyeHide ? "text" : "password"}
            id={id}
            className="outline-none "
            placeholder={placeholderText}
          />
          {isEyeHide ? (
            <EyeOpenIcon
              onClick={() => {
                setIsEyeHide((prev) => !prev);
              }}
              className="opacity-60"
            />
          ) : (
            <EyeClosedIcon
              onClick={() => {
                setIsEyeHide((prev) => !prev);
              }}
              className="opacity-60"
            />
          )}
        </div>
      </div>
    );
  }
}

export default Input;
