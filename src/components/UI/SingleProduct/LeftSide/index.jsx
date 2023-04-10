import React, { useRef, useState } from "react";
import cls from "./LeftSide.module.scss";
import Image from "next/image";
import { HeartIcon } from "components/UI/Icons";
import { colors, memories, charastericticsData } from "../data";
import { EyeIcon } from "components/UI/Icons";
import ImageGallery from "react-image-gallery";
import ReactImageMagnify from "react-image-magnify";
import { images } from "../data";
import { imagek } from "../data";

console.log("manaaa", imagek);

function LeftSide() {
  const [isActiveColor, setIsActiveColor] = useState("black.png");
  const [isActiveMemory, setIsActiveMemory] = useState("128 Гб");
  const [img, setImage] = useState(imagek[2]);

  const [active, setActive] = useState(null);

  const hoverHandler = (image, i) => {
    setImage(image);
    refs.current[i].classList.add(cls.active);
    for (let j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove(cls.active);
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];

  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className={cls.leftSide}>
      <div className={cls.left}>
        {/* <ImageGallery
          showBullets={false}
          showIndex={false}
          showThumbnails={true}
          lazyLoad={false}
          showPlayButton={false}
          showNav={false}
          showFullscreenButton={false}
          thumbnailPosition={"left"}
          items={images}
        /> */}
        <div className={cls.left_1}>
          {imagek &&
            imagek.map((image, i) => (
              <div
                className={`${cls.img_wrap} ${active == image && cls.active}`}
                onClick={() => setActive(image)}
                key={i}
                onMouseOver={() => hoverHandler(image, i)}
                ref={addRefs}
              >
                <img src={image} alt='rasm' />
              </div>
            ))}
        </div>
        <div className={cls.left_2}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Zoom image",
                isFluidWidth: true,
                src: img,
              },
              largeImage: {
                src: img,
                width: 1400,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "300%",
                height: "250%",
              },
            }}
          />
        </div>
      </div>

      <div className={cls.properties}>
        <img
          className={cls.discountImg}
          src='/images/discount.png'
          alt='discount'
        />
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
                  objectFit='contain'
                  layout='fill'
                  alt='img'
                />
              </div>
            </div>
          ))}
        </div>
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
