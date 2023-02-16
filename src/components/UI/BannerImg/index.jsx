import React from "react";
import CImage from "../CImage";
import cls from "./BannerImg.module.scss";
import { Container } from "@mui/material";

function BannerImg() {
  return (
    <div className={cls.root}>
      <Container>
        <div className={cls.banner}>
          <CImage src="/images/main/banner.png" />
        </div>
      </Container>
    </div>
  );
}

export default BannerImg;
