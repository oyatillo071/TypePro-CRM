import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

import { toast, Toaster } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../requests";
import { validateEmail } from "../functions";

function Login() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    const email = event.target[0].value;
    const password = event.target[1].value;

    const emailValidateRes = validateEmail(email);
    if (!emailValidateRes) {
      setErrors((prev) => {
        return { ...prev, email: "Email xato kiritildi" };
      });
      toast.info("Email xato kiritildi");
      return;
    }
    if (password?.length < 4) {
      toast.info("Parol 5 ta belgidan kichik bolishi mumkin emas");
      setErrors((prev) => {
        return { ...prev, password: "Parol xato kiritildi" };
      });
      return;
    }
    console.log("Validate successfuly");
    setData(() => {
      return { email, password };
    });
    setErrors({
      email: "",
      password: "",
    });
    loginApi(data, navigate);
  }
  useEffect(() => {}, [data]);
  return (
    <div className="container justify-center flex items-center min-h-screen">
      <Toaster position="top-right" />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
        className="bg-white shadow-md max-w-[400px] w-full rounded-2xl px-6 py-4 "
      >
        <h2 className="font-medium  text-xl text-blackText">Kirish</h2>
        <hr className="my-4" />
        <div className="flex flex-col gap-4">
          <Input
            data={{
              labelText: "E-mail",
              id: "email",
              type: "text",
              placeholderText: "Email kiriting:",
            }}
          />
          {errors.email.trim() && (
            <p className="text-red-600">{errors.email}</p>
          )}
          <Input
            data={{
              labelText: "Parol",
              id: "password",
              type: "password",
              placeholderText: "Parol kiriting:",
            }}
          />
          {errors.password.trim() && (
            <p className="text-red-600">{errors.password}</p>
          )}
        </div>
        <Button
          data={{
            text: "Kirish",
            bgColor: "lightGreen",
            type: "submit",
          }}
        />
      </form>
    </div>
  );
}

export default Login;
