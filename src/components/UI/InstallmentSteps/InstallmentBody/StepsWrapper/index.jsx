import React from "react";
import cls from "./StepsWrapper.module.scss";
import { Container } from "@mui/material";

function SetpsWrapper({ title, children, className }) {
  return (
    <div className={cls.root}>
      <Container>
        {title && <h1>{title}</h1>}
        <div className={`${cls.wrapper} ${className}`}>{children}</div>
      </Container>
    </div>
  );
}

export default SetpsWrapper;
