import React from "react";
import cls from "../Brands.module.scss";
import CImage from "components/UI/CImage";
import Link from "next/link";

function Card({ data }) {
  return (
    <Link href="/">
      <a>
        <div className={cls.card}>
          <div className={cls.img}>
            <CImage
              objectFit="contain"
              src={`/images/main/${data.url}`}
              alt={data.url}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
