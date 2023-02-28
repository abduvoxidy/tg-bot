import React from "react";
import cls from "./SimpleHeader.module.scss";
import { Container } from "@mui/material";
import BackButton from "components/UI/Buttons/BackButton";
import { LogoIcon } from "components/UI/Icons";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import { UserIcon } from "components/UI/Icons";

export function SimpleHeader() {
  return (
    <header className={cls.header}>
      <Container className={cls.container}>
        <BackButton>Назад</BackButton>
        <span>
          <LogoIcon />
        </span>
        <SecondaryButton icon={<UserIcon />}>Личный кабинет</SecondaryButton>
      </Container>
    </header>
  );
}
