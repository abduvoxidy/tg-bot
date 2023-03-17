import React from "react";
import cls from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";
import useKeyTranslation from "hooks/useKeyTranslation";

function FeatureCategoryCard({ data }) {
  const getKey = useKeyTranslation();

  return (
    <Link href={`/catalog/${data && data?.guid ? data?.guid : "link"}`}>
      <a>
        <div className={cls.card}>
          <div className={cls.img}>
            <Image
              objectFit="contain"
              layout="fill"
              src={`${data?.photo ? data.photo : "/images/no-photo.png"}`}
              alt="tel1"
            />
          </div>
          <p className={cls.title}>{data?.[getKey("name")]}</p>
        </div>
      </a>
    </Link>
  );
}

export default FeatureCategoryCard;
