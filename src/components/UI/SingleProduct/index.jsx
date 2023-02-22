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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            exercitationem quo fugiat dolores, eaque doloremque nostrum quam
            iusto. Consectetur non laborum quam reiciendis optio dolor dolore
            facilis aliquam voluptatem quod.
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
              {charastericticsData.map((el) => (
                <div className={cls.row}>
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
