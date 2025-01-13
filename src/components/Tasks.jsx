import React from "react";
import { tableData } from "../constants";
import { useNavigate } from "react-router-dom";
import { useObjectStore } from "../zustend/store";
function Tasks() {
  const { object, add, update, remove, clear } = useObjectStore();
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen  bg-white p-6  ">
      <table className="w-full bg-white  shadow-lg rounded-lg my-10">
        <tbody>
          {tableData &&
            tableData?.map((employee, index) => {
              return (
                <tr
                  key={index}
                  className={`bg-white border-b hover:bg-gray-200`}
                >
                  <td
                    onClick={() => {
                      console.log(employee, "employee details");
                      add("key1", employee);
                      navigate("/details");
                    }}
                    className="p-4 "
                  >
                    {employee.name}
                  </td>
                  <td className="p-4 ">{employee.type}</td>
                  <td className="p-4 ">
                    {employee.isActive ? (
                      <span className="block text-lightGreen">Active</span>
                    ) : (
                      <span className="block text-red-600">Block</span>
                    )}
                  </td>

                  <td className="p-4  flex space-x-2 justify-center">
                    <button
                      onClick={() => {
                        handleChange(employee);
                      }}
                      className="px-4 py-2 bg-lightGreen text-white rounded-lg hover:bg-green-600"
                    >
                      O'zgartirish
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                      O'chirish
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
