import React from "react";
import cls from "./ProductImgCard.module.scss";
import Image from "next/image";
import Link from "next/link";

function ProductImgCard({ data }) {
  return (
    <Link href="/catalog/list">
      <a>
        <div className={cls.card}>
          <div className={cls.img}>
            <Image
              objectFit="contain"
              layout="fill"
              src={`/images/main/${data.url}`}
              alt="tel1"
            />
          </div>
          <p className={cls.title}>{data.name}</p>
        </div>
      </a>
    </Link>
  );
}

export default ProductImgCard;
