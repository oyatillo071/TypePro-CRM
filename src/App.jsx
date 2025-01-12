import React from "react";
import MainLayout from "./Layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees";

function App() {
  return (
    <>
      <Routes>
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
  );
}

export default App;
