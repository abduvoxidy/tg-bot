import React from "react";
import cls from "./BannerImg.module.scss";
import Image from "next/image";

function BannerImg({ data, title, className }) {
  // console.log("data", data);
  return (
    <div className={`${cls.root} ${className}`}>
      <div className={cls.banner}>
        <Image
          src={data?.photo ? data.photo : "/images/main/banner.png"}
          objectFit="cover"
          layout="fill"
          alt={title ? title : "banner"}
          placeholder="blur"
          blurDataURL={"/images/no-photo.png"}
        />
      </div>
    </div>
  );
}

export default BannerImg;
