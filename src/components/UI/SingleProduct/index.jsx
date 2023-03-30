import React from "react";
import cls from "./SingleProduct.module.scss";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { useState } from "react";
import InstallmentCalculator from "../InstallmentCalculator";
import CStar from "components/UI/CStars/CStar";

function SingleProduct() {
  const [value, setValue] = useState(2);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={cls.root}>
        <h1 className={cls.title}>
          Ноутбук DERE V10, Intel Celeron N4000 (1.1 ГГц), RAM 12 ГБ 512 ГБ,
          Intel UHD Graphics, Windows Pro, Российская клавиатура
        </h1>

        <div className={cls.about}>
          <p className={cls.text}>
            Артикул: <span>35174913</span>
          </p>
          <p className={cls.text}>
            Отзывов: <span>21</span>
          </p>
          <span className={cls.stars}>
            <CStar
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </span>
        </div>

        <div className={cls.body}>
          <LeftSide />
          <RightSide setOpen={setOpen} />
        </div>
      </div>
      <InstallmentCalculator open={open} setOpen={setOpen} />
    </>
  );
}

export default SingleProduct;
