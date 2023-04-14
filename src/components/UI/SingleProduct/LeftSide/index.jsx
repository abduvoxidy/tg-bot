import React, { useRef, useState } from "react";
import cls from "./LeftSide.module.scss";
import Image from "next/image";
import { HeartIcon } from "components/UI/Icons";
import { colors, memories, charastericticsData } from "../data";
import { EyeIcon } from "components/UI/Icons";
import ImageGallery from "react-image-gallery";
import ReactImageMagnify from "react-image-magnify";
import { images } from "../data";
import { Grid, Paper } from "@mui/material";
import MyImageGallery from "./imageGallery";
import MyReactImageMagnify from "./imageMagnify";

function LeftSide() {
  const [isActiveColor, setIsActiveColor] = useState("black.png");
  const [isActiveMemory, setIsActiveMemory] = useState("128 Гб");
  const [img, setImage] = useState(images[0].original);

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
        {/* <Grid container spacing={4}>
        <Grid item xs={6}>
          <MyReactImageMagnify />
          <MyImageGallery />
        </Grid>
        <Grid container spacing={2} item xs={6} direction="column">
          <Grid item>
            <Paper>bla blah</Paper>
          </Grid>
        </Grid>
      </Grid> */}

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
        >
            <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Zoom image",
                isFluidWidth: true,
                src: images,
              },
              largeImage: {
                src: images,
                width: 1600,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "150%",
              },
            }}
          />
        </ImageGallery> */}

        <div className={cls.left_1}>
          {images &&
            images.map((image, i) => (
              <div
                className={`${cls.img_wrap} ${
                  active == image.original && cls.active
                }`}
                onClick={() => {
                  setActive(image.original);
                  hoverHandler(image.original, i);
                }}
                key={i}
                // onMouseOver={() => hoverHandler(image, i)}
                ref={addRefs}
              >
                <img src={image.original} alt='rasm' />
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
                width: 1600,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "150%",
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
