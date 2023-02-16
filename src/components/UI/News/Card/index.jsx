import React from "react";
import cls from "../News.module.scss";
import CImage from "components/UI/CImage";
import Link from "next/link";

function Card({ data }) {
  return (
    <Link href="/">
      <a>
        <div className={cls.card}>
          <div className={cls.img}>
            <CImage src={`/images/main/${data.url}`} alt={data.url} />
          </div>
          <p className={cls.desc}>{data.name}</p>
        </div>
      </a>
    </Link>
  );
}

export default Card;
