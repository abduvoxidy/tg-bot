import useKeyTranslation from "hooks/useKeyTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cls from "./ReviewsCard.module.scss";

const ReviewsCard = ({ data }) => {
  const getKey = useKeyTranslation();
  return (
    <Link href={`/reviews/${data.guid}`}>
      <div className={cls.wrap}>
        <div className={cls.image}>
          <Image
            src={data.photo || "/images/no-photo.png"}
            layout='fill'
            objectFit='contain'
          />
        </div>
        <p className={cls.title}>{data?.[getKey("title")]}</p>
        <p
          className={cls.description}
          dangerouslySetInnerHTML={{
            __html: data?.[getKey("short_description")],
          }}
        />
      </div>
    </Link>
  );
};
export default ReviewsCard;
