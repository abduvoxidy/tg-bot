import React from "react";
import cls from "./ProductCard.module.scss";
import Image from "next/image";
import { ScaleIcon, ProductHeartIcon } from "components/UI/Icons";
import { useState } from "react";
import Link from "next/link";
import MainButton from "components/UI/Buttons/MainButton";
import CStar from "components/UI/CStars/CStar";
import useKeyTranslation from "hooks/useKeyTranslation";
import numberToPrice from "utils/numberToPrice";

function ProductCard({ data, img, zIndex = 0 }) {
  const getKey = useKeyTranslation();
  const [value, setValue] = useState(2);
  const [isActive, setIsActive] = useState(false);
  const types = ["128GB", "256GB", "512GB", "512GB", "..."];
  // zIndex is working after hover product

  return (
    <div
      style={{
        zIndex: zIndex,
      }}
      className={cls.card}
      onMouseLeave={() => setIsActive(false)}
      onMouseEnter={() => setIsActive(true)}
    >
      <Link href={data ? `/product/${data.guid}` : "/product/1"}>
        <a>
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
                alt="car"
              />
            </div>
          </div>
        </a>
      </Link>
      <div className={cls.cardBody}>
        <p className={cls.title}>
          {" "}
          {(data && data.category_id_data?.[getKey("name")]) || "Смартфон"}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html:
              (data && data?.[getKey("name")]) ||
              " Смартфон Apple iPhone 14 Pro 512Gb Black",
          }}
          className={cls.desc}
        />
        <span className={cls.stars}>
          <CStar
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </span>
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
      <div className={`${cls.bottom} ${isActive ? cls.bottomActive : ""}`}>
        <Link href="/cart">
          <a>
            <MainButton size="small" className={cls.basketBtn}>
              В корзину
            </MainButton>
          </a>
        </Link>

        <div className={cls.types}>
          {types.map((el, index) => (
            <p key={el + index}>{el}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
