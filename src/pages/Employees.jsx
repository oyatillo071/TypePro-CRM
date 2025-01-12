import React, { useState } from "react";
import EmptyEmployee from "../components/EmptyEmployee";

function Employees() {
  const [isEmpty, setIsEmpty] = useState(true);
  return <div>{isEmpty && <EmptyEmployee />}</div>;
}

export default Employees;
