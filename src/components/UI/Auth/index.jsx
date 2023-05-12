import React from "react";
import Login from "./Login";
import cls from "./Auth.module.scss";

function Auth() {
  return (
    <div className={cls.root}>
      <div className={cls.wrapper} />
      <Login />
    </div>
  );
}

export default Auth;
