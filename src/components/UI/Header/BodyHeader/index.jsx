import React from "react";
import cls from "./BodyHeader.module.scss";
import { Container } from "@mui/material";
import { LogoIcon } from "components/UI/Icons";
import MainButton from "components/UI/Buttons/MainButton";
import { HamburgerIcon } from "components/UI/Icons";
import Input from "../components/Input";
import HeaderLinks from "../components/HeaderLinks";
import Link from "next/link";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

function BodyHeader() {
  const router = useRouter();

  return (
    <div className={cls.bodyHeader}>
      <Container>
        <div className={cls.box}>
          <Link href="/">
            <a>
              <LogoIcon />
            </a>
          </Link>
          <MainButton className={cls.categoryBtn} icon={<HamburgerIcon />}>
            Категории
          </MainButton>
          <Input />
          <div className={cls.right}>
            <HeaderLinks />
            <SecondaryButton
              onClick={() => router.push("/login")}
              className={cls.loginBtn}
            >
              Войти
            </SecondaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BodyHeader;
