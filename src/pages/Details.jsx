import React, { useEffect, useState } from "react";
import { useObjectStore } from "../zustend/store";
import Button from "../components/Button";
import { addTasks } from "../constants";
import Drawer from "../components/unversalDrawer";
import { useParams } from "react-router-dom";

function Details() {
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const params = useParams();
  useEffect(() => {
    console.log(params, "parametr");
  });
  const { object, add, update, remove, clear } = useObjectStore();
  const handleSubmit = (formData) => {
    setTaskModalOpen(false);
    console.log("Form ma'lumotlari:", formData);
    setModalOpen(false);
  };

  return (
    <div className="flex items-start p-10 flex-col  bg-white min-h-screen w-full">
      <div className="p-10 rounded-xl border flex flex-col max-w-[80%] w-full gap-6 ">
        <h2 className="text-xl  text-[#2c3030] font-medium">
          {object?.value?.name}
        </h2>
        <h4 className="text-base text-[#9A9C9C] font-medium">
          {object?.value?.last_name}
        </h4>
        <h4 className="text-base text-[#9A9C9C] font-medium">Tasklar</h4>
        {object?.value?.tasks.length < 1 && <h4>Task lar mavjud emas</h4>}
        <ol type="1" className="flex flex-col gap-4 pl-4 list-decimal">
          {object?.value?.tasks?.map((task, index) => (
            <li className="text-base text-[#4E4E4E]" key={index}>
              {task.name}
            </li>
          ))}
        </ol>

        <button
          onClick={() => setTaskModalOpen(true)}
          className="px-4 py-2 bg-lightGreen max-w-32 whitespace-nowrap flex items-center gap-2 text-white rounded hover:opacity-60"
        >
          Task qo'shish
        </button>

        <Drawer
          isOpen={isTaskModalOpen}
          onClose={() => setTaskModalOpen(false)}
          title="Vazifa qo'shish"
          inputs={addTasks}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Details;
