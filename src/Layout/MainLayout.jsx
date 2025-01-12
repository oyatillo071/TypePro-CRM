import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="flex flex-col items-center">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
