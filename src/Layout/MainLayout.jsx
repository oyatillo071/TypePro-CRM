import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";

function MainLayout({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("userData") ? "" : navigate("/login");
  });
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="w-full min-h-screen flex justify-start flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
