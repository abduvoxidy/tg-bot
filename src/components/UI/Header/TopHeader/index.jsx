import React, { useState } from "react";
import cls from "./TopHeader.module.scss";
import Link from "next/link";
import { LocationIcon } from "components/UI/Icons";
import { Container } from "@mui/material";
import Dropdown from "components/UI/Header/LangDropdown";

const links = [
  {
    name: "О нас",
    url: "/about",
  },
  {
    name: "Контакты",
    url: "/contact",
  },
  {
    name: "Доставка",
    url: "/delivery",
  },
];

function TopHeader() {
  return (
    <Container>
      <div className={cls.topHeader}>
        <nav>
          <ul className={cls.navMenu}>
            {links.map((el) => (
              <li key={el.name}>
                <Link href={el.url}>
                  <a className={cls.navLink}> {el.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={cls.right}>
          <div className={cls.language}>
            <Dropdown />
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
