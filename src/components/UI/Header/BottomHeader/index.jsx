import React from "react";
import cls from "./BottomHeader.module.scss";
import { Container } from "@mui/material";
import Link from "next/link";

const links = [
  {
    name: "Акции",
    url: "/discount",
  },
  {
    name: "Новости",
    url: "/news",
  },
  {
    name: "Бренды",
    url: "/brands",
  },
  {
    name: "Обзоры и советы",
    url: "/reviews",
  },
];

function BottomHeader() {
  return (
    <div className={cls.bottomHeader}>
      <Container>
        <div className={cls.box}>
          {links.map((el, i) => (
            <Link key={el.name} href={el.url}>
              <a>{el.name}</a>
            </Link>
          ))}
        </div>
      </Container>
    </div>
    // <></>
  );
}

export default BottomHeader;
