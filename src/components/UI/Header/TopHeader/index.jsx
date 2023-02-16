import React from "react";
import cls from "./TopHeader.module.scss";
import Link from "next/link";
import { LocationIcon } from "components/UI/Icons";
import { Container } from "@mui/material";

function TopHeader() {
  return (
    <Container>
      <div className={cls.topHeader}>
        <nav>
          <ul className={cls.navMenu}>
            <li>
              <Link href="/">
                <a className={cls.navLink}>О нас</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={cls.navLink}>Контакты</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={cls.navLink}>Доставка</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={cls.right}>
          <div className={cls.language}>
            <span>Рус</span>
            <img src="/icons/ru.png" alt="ru" />
          </div>
          <div className={cls.location}>
            <span>Ташкент</span>
            <LocationIcon />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TopHeader;
