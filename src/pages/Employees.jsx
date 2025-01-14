import React, { useEffect, useState } from "react";
import EmptyEmployee from "../components/EmptyEmployee";
import { addEmploy, addTasks } from "../constants";
import Drawer from "../components/unversalDrawer";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  addEmployeeApi,
  addTaskApi,
  deleteManagerApi,
  fullGetApi,
  getManagersApi,
  getManagersByNameApi,
  getManagersWithPagination,
  updateEmployeeData,
} from "../requests";
import { useNavigate, useParams } from "react-router-dom";
import { useEditStore, useModalStore, useObjectStore } from "../zustend/store";
import EditForm from "../components/EditForm";

function Employees() {
  const { object, add } = useObjectStore();
  const { isModalOpen, openModal } = useModalStore();
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalEmploy, setModalEmploy] = useState(false);
  const [serachValue, setSearchValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [tableData, setTableData] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const handlePagination = async (page) => {
    try {
      const paginatedData = await getManagersWithPagination(page, 10, navigate);
      setTableData(paginatedData);
      setCurrentPage(page);
    } catch (error) {
      console.error("Pagination xatosi:", error.message);
    }
  };

  async function searchSubmit(event) {
    event.preventDefault();
    try {
      const searchData = await getManagersByNameApi(serachValue, navigate);
      console.log(searchData, "Search natijalari");
      setTableData(searchData);
      setIsEmpty(searchData.length == 0);
    } catch (error) {
      console.error("Qidiruvda xatolik:", error.message);
    }
  }

  useEffect(() => {
    console.log(params);

    const fetchData = async () => {
      let data = null;

      try {
        if (params?.id?.length > 3) {
          if (params.id === "users") {
            const employeesData = await fullGetApi(navigate, "employees");
            const managersData = await fullGetApi(navigate, "managers");

            data = [...employeesData, ...managersData];
          } else {
            data = await fullGetApi(navigate, params.id);
          }
        } else if (params.id == "managers") {
          data = await getManagersApi(navigate);
        } else {
          const employees = await fullGetApi(navigate, "employees");
          const managers = await fullGetApi(navigate, "managers");
          data = [...employees, ...managers];
        }

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

  const handleSubmitAddTask = (formData) => {
    setTaskModalOpen(false);
    addTaskApi(navigate, formData);

    setTaskModalOpen(false);
  };

  const handleSubmit = async (formData) => {
    // console.log("Form ma'lumotlari:", formData);
    const employeesData = await fullGetApi(navigate, "employees");
    formData.id = employeesData.length + 1;
    addEmployeeApi(navigate, formData);
    // console.log(formData, "formData response");

    setModalEmploy(false);
  };

  return (
    <div className="bg-white relative min-h-screen">
      <div className="flex flex-col items-start  p-6">
        <button
          onClick={() => setModalEmploy(true)}
          className={`px-4 py-2 bg-lightGreen my-6 items-center gap-2 text-white rounded hover:opacity-60 ${
            params.id == "tasks" ? "hidden" : "flex"
          }`}
        >
          <span className="text-2xl">+</span> Hodim Qo'shish
        </button>
        <div className="flex items-center gap-4">
          {params.id == "tasks" && (
            <button
              onClick={() => setTaskModalOpen(true)}
              className={`px-4  py-2 bg-lightGreen whitespace-nowrap items-center gap-2 text-white rounded hover:opacity-60 `}
            >
              <span className="text-2xl">+</span> Vazifa Qo'shish
            </button>
          )}
          <div className="border  px-3 py-2 w-full max-w-[348px] rounded-lg flex items-center  gap-4">
            <MagnifyingGlassIcon className="opacity-50" />
            <form onSubmit={searchSubmit}>
              <input
                type="search"
                name="search"
                value={serachValue}
                onChange={(event) => {
                  setSearchValue(event.target.value);
                }}
                className="outline-none w-11/12"
                placeholder="search"
                id=""
              />
            </form>
          </div>
        </div>
      </div>
      {isEmpty ? (
        <EmptyEmployee />
      ) : (
        <div className="p-6">
          <Drawer
            isOpen={isTaskModalOpen}
            onClose={() => setTaskModalOpen(false)}
            title="Vazifa qo'shish"
            inputs={addTasks}
            onSubmit={handleSubmitAddTask}
          />

          <Drawer
            isOpen={modalEmploy}
            onClose={() => setModalEmploy(false)}
            title="Hodim qo'shish"
            inputs={addEmploy}
            onSubmit={handleSubmit}
          />
          <EditForm onSubmit={handleSubmit} isOpen={false} />
          <table className="w-full bg-white shadow-lg rounded-lg my-10">
            {params.id != "tasks" && (
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
            )}
            <tbody>
              {tableData &&
                tableData?.map((employee, index) => {
                  console.log(employee, "177 qator employee");

                  if (employee.isActive && params.id == "users") {
                    return;
                  }
                  return (
                    <tr
                      key={index}
                      className={`bg-white border-b hover:bg-gray-200`}
                    >
                      <td
                        className="p-4 "
                        onClick={() => {
                          if (params.id != "tasks") {
                            console.log(employee, "employee details");
                            add("key1", employee);
                            navigate("/details");
                          }
                        }}
                      >
                        {employee.name}
                      </td>
                      <td className="p-4 ">{employee?.type}</td>
                      <td className="p-4 ">{employee?.last_name}</td>
                      {employee?.phone?.length > 4 ? (
                        <td className="p-4 ">{employee?.phone}</td>
                      ) : (
                        <td className="p-4 ">{employee?.email}</td>
                      )}
                      <td
                        onClick={() => {
                          console.log(!employee.isActive, "192 qator");
                        }}
                        className="p-4 "
                      >
                        {employee.isActive ? (
                          <span className="block text-lightGreen">Active</span>
                        ) : (
                          <span className="block text-red-600">Block</span>
                        )}
                      </td>

                      <td className="p-4  flex space-x-2 justify-center">
                        <button
                          onClick={() => {
                            add("key2", employee);
                            openModal();
                          }}
                          className="px-4 py-2 bg-lightGreen text-white rounded-lg hover:bg-green-600"
                        >
                          O'zgartirish
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            if (confirm("Rostdan ham o'chirmoqchimisiz?")) {
                              deleteManagerApi(navigate, employee.id)
                                .then(() => {
                                  setTableData((prevData) =>
                                    prevData.filter(
                                      (item) => item.id !== employee.id
                                    )
                                  );
                                  toast.succes(
                                    "Xodim muvaffaqiyatli o'chirildi!"
                                  );
                                })
                                .catch((error) => {
                                  toast.error(
                                    "O'chirishda xatolik:",
                                    error.message
                                  );
                                  toast.error(
                                    "Xodimni o'chirishda xatolik yuz berdi!"
                                  );
                                });
                            }
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

          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => handlePagination(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-black rounded-lg"
            >
              Oldingi
            </button>
            <button
              onClick={() => handlePagination(currentPage + 1)}
              className="px-4 py-2 bg-lightGreen text-white rounded-lg"
            >
              Keyingi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employees;
