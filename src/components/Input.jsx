import React, { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon, PlusIcon } from "@radix-ui/react-icons";

function Input(props) {
  const { labelText, placeholderText, id, type, values = [] } = props.data;
  const [isEyeHide, setIsEyeHide] = useState("false");

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
            name={id}
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

  if (type == "select") {
    // console.log(props.data);

    return (
      <div className="flex flex-col gap-2">
        <label className="text-xs" htmlFor={id}>
          {labelText}
        </label>
        <select
          id={id}
          name={id}
          className="border px-3 py-2 w-full rounded-lg bg-white outline-none"
        >
          <option value="" disabled>
            {placeholderText}
          </option>
          {values?.map((optionValue, index) => {
            // console.log(optionValue, "55 qator input");
            return (
              <option key={index} value={optionValue}>
                {optionValue}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <label className="text-lg text-black block" htmlFor={id}>
        {labelText}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="border px-3 py-2 w-full rounded-lg "
        placeholder={placeholderText}
      />
    </div>
  );
}

export default Input;
