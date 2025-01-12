import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="w-full min-h-screen flex justify-end flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
