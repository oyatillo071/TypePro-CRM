import React, { useState, useEffect } from "react";
import { useModalStore, useObjectStore } from "../zustend/store";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { updateEmployeeData } from "../requests";
import { Cross1Icon } from "@radix-ui/react-icons";

function EditForm({ onSubmit, isOpen }) {
  const { object } = useObjectStore();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(object?.value || {});
  const { isModalOpen, closeModal, openModal } = useModalStore();
  useEffect(() => {
    setFormValues(object?.value || {});
    console.log(object);
  }, [object]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...formValues.tasks];
    updatedTasks[index] = value;
    setFormValues((prev) => ({
      ...prev,
      tasks: updatedTasks,
    }));
  };

  const handleAddTask = () => {
    setFormValues((prev) => ({
      ...prev,
      tasks: [...(prev.tasks || []), ""],
    }));
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = formValues.tasks.filter((_, i) => i !== index);
    setFormValues((prev) => ({
      ...prev,
      tasks: updatedTasks,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateEmployeeData(formValues.id, formValues, navigate);
    navigate("/");
  };

  if (isOpen) return null;
  if (!isModalOpen) return null;
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex-col bg-white fixed inset-0 z-50 flex bg-opacity-50  items-center justify-center `}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <Cross1Icon
          className="absolute top-3 right-3 cursor-pointer"
          onClick={closeModal}
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Hodimni ozgartirish
        </h2>
        <hr className="my-5" />
        <Toaster />
        <div className="flex-col flex gap-6 mb-5 text-xl">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Ism
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 border rounded w-full"
              placeholder="Ismni kiriting"
              value={formValues.name || ""}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 border rounded w-full"
              placeholder="Emailni kiriting"
              value={formValues.email || ""}
              onChange={handleChange}
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Familiya
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="p-2 border rounded w-full"
              placeholder="Familiyani kiriting"
              value={formValues.last_name || ""}
              onChange={handleChange}
            />
          </div>

          {/* Type */}
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Turi
            </label>
            <input
              type="text"
              id="type"
              name="type"
              className="p-2 border rounded w-full"
              placeholder="Turi"
              value={formValues.type || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Tasks */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Vazifalar
          </label>
          {formValues.tasks?.map((task, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                value={task}
                onChange={(e) => handleTaskChange(index, e.target.value)}
                className="p-2 border rounded w-full"
                placeholder={`Vazifa ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => handleRemoveTask(index)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                O'chirish
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTask}
            className="my-4 px-4 py-2 bg-lightGreen text-white rounded hover:bg-green-600"
          >
            Vazifa qo'shish
          </button>
        </div>

        {/* IsActive */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isActive"
            name="isActive"
            className="mr-2"
            checked={formValues.isActive || false}
            onChange={handleChange}
          />
          <label htmlFor="isActive" className="text-sm text-gray-700">
            Faol holat
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-lightGreen text-white rounded hover:bg-blue-600"
          >
            Saqlash
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditForm;
