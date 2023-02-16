import React from "react";
import cls from "../Header.module.scss";
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

function BodyHeader() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const isScroll = scrollTop >= 40 ? true : false;
    setSticky(isScroll);
  };
  return (
    <div className={`${cls.bodyHeader} ${sticky ? cls.sticky : ""}`}>
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
            <SecondaryButton className={cls.loginBtn}>Войти</SecondaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BodyHeader;
