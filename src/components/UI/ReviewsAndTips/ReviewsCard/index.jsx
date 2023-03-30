import Image from "next/image";
import Link from "next/link";
import React from "react";
import cls from "./ReviewsCard.module.scss";

const ReviewsCard = ({ data }) => {
  return (
    <Link href={`/reviews/${data.id}`}>
      <div className={cls.wrap}>
        <div className={cls.image}>
          <Image
            src={data.image || "/images/no-photo.png"}
            layout='fill'
            objectFit='contain'
          />
        </div>
        <p className={cls.title}>{data.title}</p>
        <p className={cls.description}>{data.description}</p>
      </div>
    </Link>
  );
};

export default ReviewsCard;
