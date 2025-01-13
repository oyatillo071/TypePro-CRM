import React, { useEffect, useState } from "react";
import EmptyEmployee from "../components/EmptyEmployee";
import { addEmploy, addTasks } from "../constants";
import Drawer from "../components/unversalDrawer";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { fullGetApi, getManagersApi } from "../requests";
import { useNavigate, useParams } from "react-router-dom";

import { useObjectStore } from "../zustend/store";

function Employees() {
  const { object, add, update, remove, clear } = useObjectStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    console.log(params);
  });
  const [editData, setEditData] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [tableData, setTableData] = useState("");
  const handleSubmit = (formData) => {
    console.log("Form ma'lumotlari:", formData);
    setModalOpen(false);
  };

  useEffect(() => {
    console.log(params);

    const fetchData = async () => {
      let data = null;
      let dataCopy = null;

      try {
        if (params?.id?.length > 3) {
          if (params.id === "users") {
            const employeesData = await fullGetApi(navigate, "employees");
            const managersData = await fullGetApi(navigate, "managers");

            data = [...employeesData, ...managersData];
          } else {
            data = await fullGetApi(navigate, params.id);
          }
        } else {
          data = await getManagersApi(navigate);
        }

        console.log("Fetched Data:", data);

        if (data) {
          setIsEmpty(false);
          setTableData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate, params]);

  function handleChange(employee) {
    console.log(employee);
    setEditData(employee);
  }
  useEffect(() => {
    console.log(tableData, "data 62 qator");
  }, [tableData]);

  useEffect(() => {
    console.log(editData, "37qator");
  }, [editData]);

  return (
    <div className="bg-white min-h-screen">
      {isEmpty ? (
        <EmptyEmployee />
      ) : (
        <div className="p-6">
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-lightGreen flex items-center gap-2 text-white rounded hover:opacity-60"
          >
            <span className="text-2xl">+</span> Hodim Qo'shish
          </button>

          <button
            onClick={() => setTaskModalOpen(true)}
            className="px-4 my-5 py-2 bg-lightGreen flex items-center gap-2 text-white rounded hover:opacity-60"
          >
            <span className="text-2xl">+</span> Vazifa Qo'shish
          </button>
          <div className="border mt-5 px-3 py-2 w-full max-w-[348px] rounded-lg flex items-center  gap-4">
            <MagnifyingGlassIcon className="opacity-50" />
            <input
              type="search"
              name=""
              className="outline-none w-11/12"
              placeholder="search"
              id=""
            />
          </div>

          <Drawer
            isOpen={isTaskModalOpen}
            onClose={() => setTaskModalOpen(false)}
            title="Vazifa qo'shish"
            inputs={addTasks}
            onSubmit={handleSubmit}
          />
          {/* {isEditModalOpen && (
            <Drawer
              isOpen={isEditModalOpen}
              onClose={() => setEditModalOpen(false)}
              title="Hodim o'zgartirish"
              inputs={editData}
              onSubmit={handleSubmit}
            />
          )} */}

          <Drawer
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            title="Hodim qo'shish"
            inputs={addEmploy}
            onSubmit={handleSubmit}
          />
          <table className="w-full bg-white shadow-lg rounded-lg my-10">
            <thead className="bg-[#f5f5f5] py-7">
              <tr className="border-b text-left ">
                <th className="px-4 py-7">Ism Familiya</th>
                <th className="px-4 py-7">Turi</th>
                <th className="px-4 py-7">Telefon</th>
                <th className="px-4 py-7" colSpan="4">
                  E-mail
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData?.map((employee, index) => {
                  // console.log(tableData.data, "88qator");
                  // console.log(employee, "87qator");
                  return (
                    <tr
                      key={index}
                      className={`bg-white border-b hover:bg-gray-200`}
                    >
                      <td
                        className="p-4 "
                        onClick={() => {
                          console.log(employee, "employee details");
                          // dispatch(addItem(employee));
                          add("key1", employee);
                          navigate("/details");
                        }}
                      >
                        {employee.name}
                      </td>
                      <td className="p-4 ">{employee.type}</td>
                      <td className="p-4 ">{employee.last_name}</td>
                      {/* <td className="p-4 ">{employee.phone}</td> */}
                      <td className="p-4 ">{employee.email}</td>
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
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                          }}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          O'chirish
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Employees;
