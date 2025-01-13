import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Cross1Icon } from "@radix-ui/react-icons";

function Drawer({ isOpen, onClose, title, inputs, onSubmit }) {
  const [formData, setFormData] = useState(
    inputs.reduce((acc, input) => {
      acc[input.id] = "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const formElements = e.target.form;

    for (let element of formElements) {
      if (element.id && element.value.trim().length < 4) {
        const input = inputs.find((inp) => inp.id === element.id);
        if (input) {
          newErrors[element.id] =
            input.errorText || `${input.labelText} ni kiriting`;
        }
      }
    }

    console.log(newErrors, "Xatolar royhati");

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const formDataObject = Object.fromEntries(
      Array.from(formElements)
        .filter((el) => el.id)
        .map((el) => [el.id, el.value.trim()])
    );
    console.log(formDataObject, "To'liq ma'lumot");

    onSubmit(formDataObject);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <Cross1Icon
          className="absolute top-3 right-3 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-lg font-bold text-gray-800 mb-4">{title}</h2>
        <hr className="my-5" />
        <form onSubmit={handleSubmit} className="space-y-4">
          {inputs.map(
            ({ values, labelText, type, id, placeholderText }, index) => (
              <div key={index}>
                <Input
                  data={{
                    type,
                    id,
                    labelText,
                    placeholderText,
                    value: formData[id],
                    values,
                    name: id,
                  }}
                  onChange={handleChange}
                />
                {errors[id] && (
                  <p className="text-red-600 text-sm mt-1">{errors[id]}</p>
                )}
              </div>
            )
          )}
          <div className="flex justify-end space-x-4 items-center">
            <button
              type="button"
              onClick={onClose}
              className="border rounded-lg text-black bg-white  py-2 px-4"
            >
              Bekor qilish
            </button>

            <button
              type="submit"
              onClick={handleSubmit}
              className="px-4 py-2 bg-lightGreen max-w-32  whitespace-nowrap flex items-center gap-2 text-white rounded hover:opacity-60"
            >
              Qo'shish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Drawer;
