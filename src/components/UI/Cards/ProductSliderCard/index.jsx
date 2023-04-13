import React from "react";
import cls from "./ProductSliderCard.module.scss";
import Image from "next/image";
import { ScaleIcon, ProductHeartIcon } from "components/UI/Icons";
import Link from "next/link";
import CStar from "components/UI/CStars/CStar";
import { useState } from "react";
import useKeyTranslation from "hooks/useKeyTranslation";
import numberToPrice from "utils/numberToPrice";

function ProductSliderCard({ data, img }) {
  const [value, setValue] = useState(2);
  const getKey = useKeyTranslation();

  return (
    <Link href="/product/123">
      <a>
        <div className={cls.card}>
          <div className={cls.cardHeader}>
            <div className={cls.badge}>20%</div>
            <div className={cls.icons}>
              <span>
                <ScaleIcon />
              </span>
              <span>
                <ProductHeartIcon />
              </span>
            </div>

            <div className={cls.img}>
              <Image
                src={`${
                  data && data?.photo
                    ? data?.photo
                    : img
                    ? `/images/main/${img}`
                    : `/images/no-photo.png`
                }`}
                objectFit="contain"
                layout="fill"
                placeholder="blur"
                blurDataURL="/images/skeleton.webp"
                alt="car"
              />
            </div>
          </div>
          <div className={cls.cardBody}>
            <p className={cls.title}>
              {(data && data?.[getKey("name")]) || "Смартфон"}
            </p>
            {/* <div
              dangerouslySetInnerHTML={{
                __html:
                  (data && data?.[getKey("description")]) ||
                  " Смартфон Apple iPhone 14 Pro 512Gb Black",
              }}
              className={cls.desc}
            /> */}

            <div onClick={(e) => e.stopPropagation()}>
              <CStar
                className={cls.stars}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>

            <div className={cls.priceMonth}>
              <span className={cls.badgePrice}>1 000 000 сум</span>
              <p className={cls.count}>x 12 мес</p>
            </div>
            <p className={cls.linePrice}>
              {" "}
              {data && data?.old_price
                ? numberToPrice(data?.old_price)
                : "1 200 000 000 сум"}
            </p>
            <p className={cls.price}>
              {data && data?.sell_price
                ? numberToPrice(data?.sell_price)
                : "1 200 000 000 сум"}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProductSliderCard;
