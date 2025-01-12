import React from "react";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-800 mb-4">
          Sahifa topilmadi
        </h2>
        <p className="text-gray-600 mb-6">
          Siz izlagan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
        </p>
        <NavLink
          to="/"
          className="px-6 py-2 bg-lightGreen text-white font-medium rounded hover:bg-blue-600"
        >
          Bosh sahifaga qaytish
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorPage;
