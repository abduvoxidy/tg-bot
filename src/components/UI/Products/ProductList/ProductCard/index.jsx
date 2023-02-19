import React from "react";
import cls from "./ProductCard.module.scss";
import Image from "next/image";
import { CompareIcon, HeartIcon } from "components/UI/Icons";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { YellowStarIcon, GrayStarIcon } from "components/UI/Icons";
import Link from "next/link";
import MainButton from "components/UI/Buttons/MainButton";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

function ProductCard({ img }) {
  const [value, setValue] = useState(2);
  const [isActive, setIsActive] = useState(false);
  const types = ["128GB", "256GB", "512GB", "512GB", "..."];

  return (
    <div
      className={cls.card}
      onMouseLeave={() => setIsActive(false)}
      onMouseEnter={() => setIsActive(true)}
    >
      <div className={cls.cardHeader}>
        <div className={cls.badge}>20%</div>
        <div className={cls.icons}>
          <span>
            <CompareIcon />
          </span>
          <span>
            <HeartIcon />
          </span>
        </div>

        <div className={cls.img}>
          <Image
            src={`/images/main/${img}`}
            objectFit="contain"
            layout="fill"
            alt="car"
          />
        </div>
      </div>
      <div className={cls.cardBody}>
        <p className={cls.title}>Смартфоны</p>
        <p className={cls.desc}>Смартфон Apple iPhone 14 Pro 512Gb Black</p>
        <span className={cls.stars}>
          <StyledRating
            name="customized-color"
            defaultValue={2}
            icon={<YellowStarIcon />}
            emptyIcon={<GrayStarIcon />}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </span>
        <div className={cls.priceMonth}>
          <span className={cls.badgePrice}>1 000 000 сум</span>
          <p className={cls.count}>x 12 мес</p>
        </div>
        <p className={cls.linePrice}> 1 200 000 000 сум</p>
        <p className={cls.price}>120 650 000 сум</p>
        <div className={`${cls.bottom} ${isActive ? cls.bottomActive : ""}`}>
          <MainButton small className={cls.basketBtn}>
            В корзину
          </MainButton>
          <div className={cls.types}>
            {types.map((el, index) => (
              <p key={el + index}>{el}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
