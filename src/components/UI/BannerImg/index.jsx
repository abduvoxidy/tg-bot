import React from "react";
import CImage from "../CImage";
import cls from "./BannerImg.module.scss";
import { Container } from "@mui/material";
import Image from "next/image";

function BannerImg({ className }) {
  return (
    <div className={`${cls.root} ${className}`}>
      <Container>
        <div className={cls.banner}>
          <Image
            src="/images/main/banner.png"
            objectFit="cover"
            layout="fill"
            alt="banner"
          />
        </div>
      </Container>
    </div>
  );
}

export default BannerImg;
