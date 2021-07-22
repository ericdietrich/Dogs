import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginPasswordCreate from "./LoginPasswordCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

const Login = () => {
  return <div>
    <Routes>
      <Route path="/" element={<LoginForm/>}/>
      <Route path="criar" element={<LoginPasswordCreate/>}/>
      <Route path="perdeu" element={<LoginPasswordLost/>}/>
      <Route path="resetar" element={<LoginPasswordReset/>}/>
    </Routes>
  </div>;
};

export default Login;
