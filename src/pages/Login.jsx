import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { validateEmail } from "../requests";

function Login() {
  const [data, setData] = useState(null);
  function handleSubmit(event) {
    const email = event.target[0].value;
    const password = event.target[1].value;
    setData(() => {
      return { email, password };
    });
  }
  useEffect(() => {
    console.log(data);
    if (data?.password?.length < 7) {
      console.log("password uzunligi etarli emas");
      return;
    }
    const emailValidateRes = !validateEmail(data?.email);
    if (emailValidateRes) {
      console.log(emailValidateRes);
      return;
    }
    // axios
    //   .post("http://localhost:3000/login", data, {
    //     header: {
    //       "Content-Type": "aplication-json",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [data]);
  return (
    <div className="container justify-center flex items-center min-h-screen">
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
            labelText={"E-mail"}
            id={"email"}
            type={"text"}
            placeholderText={"Email kiriting:"}
          />
          <Input
            labelText={"Parol"}
            id={"password"}
            type={"password"}
            placeholderText={"Parol kiriting:"}
          />
        </div>
        <Button text="Kirish" type={"submit"} variant={"greenSubmit"} />
      </form>
    </div>
  );
}

export default Login;
