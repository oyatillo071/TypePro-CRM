import React from "react";

function Login() {
  return (
    <div className="container justify-center items-center bg-[#e5e5e5]">
      <div className="bg-white shadow-md">
        <h2>Kirish</h2>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" placeholder="Email kiriting" />
        <label htmlFor="password">Parol</label>
        <div>
          <input type="text" id="password" placeholder="Parol kiriting:" />
        </div>
      </div>
    </div>
  );
}

export default Login;
