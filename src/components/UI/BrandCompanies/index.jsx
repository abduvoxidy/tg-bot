import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import cls from "./Brands.module.scss";
import data from "./data";
console.log("manaa", data);

const BrandCompanies = () => {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs title='Главная / Акции' />
        <h1 className={cls.title}>Бренды</h1>
        <div className={cls.wrap}>
          <div className={cls.brands}>
            {data &&
              data.map((el) => (
                <Link key={el.id} href={`brands/${el.id}`}>
                  <div className={cls.card}>
                    <div className={cls.brand}>
                      <Image
                        src={el.image}
                        layout='fill'
                        objectFit='contain'
                        loading='lazy'
                      />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default BrandCompanies;
