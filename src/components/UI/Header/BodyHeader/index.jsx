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
import { useRouter } from "next/router";
import CatgoriesMenu from "../CategoriesMenu";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

function BodyHeader() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const handleCategory = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <div className={cls.bodyHeader}>
        <Container>
          <div className={cls.box}>
            <Link href="/">
              <a>
                <LogoIcon />
              </a>
            </Link>
            <MainButton
              onClick={handleCategory}
              className={cls.categoryBtn}
              icon={isActive ? <ClearIcon /> : <HamburgerIcon />}
            >
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
      <div className={cls.categories}>
        <CatgoriesMenu handleCategory={handleCategory} isActive={isActive} />
      </div>
    </div>
  );
}

export default BodyHeader;
