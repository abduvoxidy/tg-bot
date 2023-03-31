import React from "react";
import cls from "./LeftSide.module.scss";
import Image from "next/image";
import { HeartIcon } from "components/UI/Icons";
import { colors, memories, charastericticsData } from "../data";
import { EyeIcon } from "components/UI/Icons";
import ImageGallery from "react-image-gallery";
import { useState } from "react";
import { images } from "../data";

function LeftSide() {
  const [isActiveColor, setIsActiveColor] = useState("black.png");
  const [isActiveMemory, setIsActiveMemory] = useState("128 Гб");
  return (
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
      <div className={cls.properties}>
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
  );
}

export default LeftSide;
