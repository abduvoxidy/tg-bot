import React from "react";
import cls from "./BannerImg.module.scss";
import { Container } from "@mui/material";
import Image from "next/image";

function BannerImg({ className }) {
  return (
    <div className={`${cls.root} ${className}`}>
      <div className={cls.banner}>
        <Image
          src="/images/main/banner.png"
          objectFit="cover"
          layout="fill"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default BannerImg;
