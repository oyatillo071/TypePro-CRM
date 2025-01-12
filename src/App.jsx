import React from "react";
import Login from "./pages/Login";
import MainLayout from "./Layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";

function App() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />
          <Route
          path="/"
          element={
            <MainLayout>
              <Employees />
            </MainLayout>
          }
        />
      </Routes>
    </>
)}

export default App;
