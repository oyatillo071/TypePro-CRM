import React, { useState, useEffect } from "react";
import axios from "axios";

function EditForm({ values, onSubmit }) {
  console.log(values, "135qator form");

  const [formValues, setFormValues] = useState({
    email: values?.email || "",
    isActive: values?.isActive || false,
    id: values?.id || "",
    last_name: values?.last_name || "",
    name: values?.name || "",
    type: values?.type || "",
  });

  useEffect(() => {
    if (values) {
      setFormValues({
        email: values?.email || "",
        isActive: values?.isActive || false,
        id: values?.id || "",
        last_name: values?.last_name || "",
        name: values?.name || "",
        type: values?.type || "",
      });
    }
  }, [values]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:3000/employees/${formValues.id}`,
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const updatedData = response.data;
        onSubmit(updatedData);
        alert("Ma'lumotlar muvaffaqiyatli o'zgartirildi!");
      } else {
        alert("O'zgartirishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xatolik yuz berdi.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-gray-100 rounded-lg"
    >
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
          value={formValues.email}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="isActive"
          name="isActive"
          className="mr-2"
          checked={formValues.isActive}
          onChange={handleChange}
        />
        <label htmlFor="isActive" className="text-sm text-gray-700">
          Faol holat
        </label>
      </div>

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
          value={formValues.name}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Saqlash
        </button>
      </div>
    </form>
  );
}

export default EditForm;
