import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import cls from "./Brands.module.scss";
import { useBrandsQuery } from "services/brands.service";

const BrandCompanies = () => {
  const { data, isLoading } = useBrandsQuery({
    data: {},
    queryParams: {
      // onSuccess: (res) => console.log("resim", res),
    },
  });


  if (isLoading) return "Loading...";

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
                        src={el.photo ? el.photo : "/images/no-photo.png"}
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
