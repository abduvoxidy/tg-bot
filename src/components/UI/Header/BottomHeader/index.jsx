import React from "react";
import cls from "./BottomHeader.module.scss";
import { Container } from "@mui/material";
import Link from "next/link";

function BottomHeader() {
  const links = ["Смартфоны", "Кроссовки", "Акции", "Новости"];
  return (
    <div className={cls.bottomHeader}>
      <Container>
        <div className={cls.box}>
          {links.map((el, i) => (
            <Link key={el + i} href="/">
              <a>{el}</a>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default BottomHeader;
