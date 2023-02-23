import React from "react";
import cls from "./SingleProduct.module.scss";
import RightSide from "./RightSide";
import { YellowStarIcon, GrayStarIcon } from "components/UI/Icons";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Image from "next/image";
import { HeartIcon } from "components/UI/Icons";
import { colors, memories, charastericticsData } from "./data";
import { EyeIcon } from "components/UI/Icons";
import ImageGallery from "react-image-gallery";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

function SingleProduct() {
  const [value, setValue] = useState(2);

  const images = [
    {
      original: "https://m.media-amazon.com/images/I/71lx0qz7rFL.jpg",
      thumbnail: "https://m.media-amazon.com/images/I/71lx0qz7rFL.jpg",
    },
    {
      original:
        "https://playgame34.ru/wp-content/uploads/2022/11/1-1000x1000.jpeg",
      thumbnail:
        "https://playgame34.ru/wp-content/uploads/2022/11/1-1000x1000.jpeg",
    },
    {
      original: "https://cdn1.ozone.ru/s3/multimedia-d/6431834701.jpg",
      thumbnail: "https://cdn1.ozone.ru/s3/multimedia-d/6431834701.jpg",
    },
    {
      original:
        "https://img.tuttoandroid.net/wp-content/uploads/2021/10/Redmi-Note-11-Pro-Plus-tag.jpg",
      thumbnail:
        "https://img.tuttoandroid.net/wp-content/uploads/2021/10/Redmi-Note-11-Pro-Plus-tag.jpg",
    },
  ];

  const [isActiveColor, setIsActiveColor] = useState("black.png");
  const [isActiveMemory, setIsActiveMemory] = useState("128 Гб");

  return (
    <div className={cls.root}>
      <h1 className={cls.title}>
        Ноутбук DERE V10, Intel Celeron N4000 (1.1 ГГц), RAM 12 ГБ 512 ГБ, Intel
        UHD Graphics, Windows Pro, Российская клавиатура
      </h1>

      <div className={cls.about}>
        <p className={cls.text}>
          Артикул: <span>35174913</span>
        </p>
        <p className={cls.text}>
          Отзывов: <span>21</span>
        </p>
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
      </div>

      <div className={cls.body}>
        <div className={cls.leftSide}>
          <div className={cls.slider}>
            <ImageGallery
              showBullets={false}
              showIndex={false}
              showThumbnails={true}
              lazyLoad={false}
              showPlayButton={false}
              showNav={false}
              showFullscreenButton={false}
              thumbnailPosition={"left"}
              items={images}
            />
          </div>
          <div className={cls.sort}>
            <span className={cls.heartIcon}>
              <HeartIcon />
            </span>
            <h3 className={cls.colorTitle}>Цвет товара: синий</h3>
            <div className={cls.colors}>
              {colors.map((el, i) => (
                <div
                  key={el + i}
                  onClick={() => setIsActiveColor(el)}
                  className={`${cls.colorItem} ${
                    isActiveColor === el ? cls.activeItem : ""
                  }`}
                >
                  <div className={cls.img}>
                    <Image
                      src={`/images/phones/${el}`}
                      objectFit="contain"
                      layout="fill"
                      alt="img"
                    />
                  </div>
                </div>
              ))}
            </div>
            <img
              className={cls.discountImg}
              src="/images/discount.png"
              alt="discount"
            />
            <h3 className={cls.memoryTitle}>Конфигурация памяти: 512 Гб</h3>
            <div className={cls.memories}>
              {memories.map((el) => (
                <div
                  key={el}
                  onClick={() => {
                    setIsActiveMemory(el);
                  }}
                  className={`${cls.memoryItem} ${
                    isActiveMemory === el ? cls.activeMemory : ""
                  }`}
                >
                  {el}
                </div>
              ))}
            </div>
            <h3 className={cls.characterTitle}>Характеристики</h3>
            <div className={cls.characteristics}>
              {charastericticsData.map((el, i) => (
                <div key={i} className={cls.row}>
                  <p className={cls.title}>{el.name}</p>
                  <div className={cls.dashed} />
                  <p className={cls.info}>{el.info}</p>
                </div>
              ))}
            </div>

            <div className={cls.seeingNow}>
              <EyeIcon />
              <p>
                <b>23</b>
                &nbsp; Человек просматривает этот товар сейчас
              </p>
            </div>
          </div>
        </div>
        <RightSide />
      </div>
    </div>
  );
}

export default SingleProduct;
