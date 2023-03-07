import React from "react";
import cls from "./InstallmentHeader.module.scss";
import { Container } from "@mui/material";

const steps = [
  {
    id: 1,
    title: "Подтверждение личности",
  },
  {
    id: 2,
    title: "Личные данные",
  },
  {
    id: 3,
    title: "Дополнительные контакты",
  },
  {
    id: 4,
    title: "Данные о карте",
  },
];

function InstallmentHeader({ activeStep }) {
  return (
    <div className={cls.header}>
      <Container>
        <div className={cls.row}>
          {steps.map((el) => (
            <div
              key={el.title}
              className={`${cls.step} ${
                activeStep === el.id ? cls.activeStep : ""
              }`}
            >
              <div
                className={`${cls.round} ${
                  activeStep === el.id ? cls.activeRound : ""
                }`}
              >
                <p>{el.id}</p>
              </div>
              <p>{el.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default InstallmentHeader;
