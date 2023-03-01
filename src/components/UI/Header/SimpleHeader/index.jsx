import React from "react";
import cls from "./SimpleHeader.module.scss";
import { Container } from "@mui/material";
import BackButton from "components/UI/Buttons/BackButton";
import { LogoIcon } from "components/UI/Icons";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import { UserIcon } from "components/UI/Icons";
import Headroom from "react-headroom";
import Link from "next/link";

export function SimpleHeader() {
  return (
    <Headroom>
      <header className={cls.header}>
        <Container className={cls.container}>
          <BackButton>Назад</BackButton>
          <Link href="/">
            <a>
              <LogoIcon />
            </a>
          </Link>
          <SecondaryButton icon={<UserIcon />}>Личный кабинет</SecondaryButton>
        </Container>
      </header>
    </Headroom>
  );
}
