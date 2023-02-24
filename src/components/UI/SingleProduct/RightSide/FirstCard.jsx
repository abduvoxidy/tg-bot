import React from "react";
import cls from "./RightSide.module.scss";
import { ShareIcon, CompareIcon } from "components/UI/Icons";
import MainButton from "components/UI/Buttons/MainButton";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { CloseIcon } from "components/UI/Icons";
import {
  ColorVKIcon,
  ColorTGIcon,
  ColorFaceBookIcon,
  ColorInstagramIcon,
  ColorOKIcon,
} from "components/UI/Icons";
import Timer from "components/UI/Timer";

function FirstCard() {
  const [open, setOpen] = useState(false);
  const icons = [
    {
      icon: ColorVKIcon,
      url: "#",
    },
    {
      icon: ColorTGIcon,
      url: "#",
    },
    {
      icon: ColorFaceBookIcon,
      url: "#",
    },
    {
      icon: ColorInstagramIcon,
      url: "#",
    },
    {
      icon: ColorOKIcon,
      url: "#",
    },
  ];

  return (
    <>
      <div className={cls.FirstCard}>
        {/* <Timer deadline={new Date(2023, 2, 27)} /> */}
        <p className={cls.discount}>
          1200 650 000 сум <span className={cls.badge}>-5%</span>
        </p>
        <h3 className={cls.price}>120 650 000 сум</h3>
        <div className={cls.peerMonth}>
          <span className={cls.priceBadge}>202 800 сум/24мес</span>
          <p>в рассрочку</p>
        </div>
        <p className={cls.delivery}>Доставка: 3-5 июня</p>

        <div className={cls.divider} />

        <div className={cls.items}>
          <div className={cls.item} onClick={() => setOpen(true)}>
            <span>
              <ShareIcon />
            </span>
            <p>Поделиться</p>
          </div>
          <div className={cls.item}>
            <span>
              <CompareIcon />
            </span>
            <p>В сравнении</p>
          </div>
        </div>

        <div className={cls.btns}>
          <MainButton fullWidth className={cls.basketBtn}>
            Добавить в корзину
          </MainButton>
          <SecondaryButton fullWidth className={cls.buyBtn}>
            Купить сейчас
          </SecondaryButton>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={cls.dialog}>
          <span onClick={() => setOpen(false)} className={cls.close}>
            <CloseIcon />
          </span>
          <div className={cls.body}>
            <h3 className={cls.title}>Поделиться товаром</h3>
            <div className={cls.icons}>
              {icons.map((el) => (
                <span>
                  <a target="_blank" href="#">
                    {el.icon()}
                  </a>
                </span>
              ))}
            </div>
            <MainButton fullWidth className={cls.modalBtn}>
              Cкопировать ссылку
            </MainButton>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default FirstCard;
