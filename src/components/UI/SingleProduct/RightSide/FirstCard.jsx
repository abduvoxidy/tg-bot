import React from "react";
import cls from "./RightSide.module.scss";
import { ShareIcon, CompareIcon } from "components/UI/Icons";
import MainButton from "components/UI/Buttons/MainButton";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import Input from "components/UI/Forms/Input";
import InputMask from "components/UI/Forms/InputMask";
import Textarea from "components/UI/Forms/Textarea";

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
import Link from "next/link";
import Timer from "components/UI/Timer";
import MainDialog from "components/UI/Dialogs/MainDialog";
import { useForm } from "react-hook-form";

function FirstCard({ handleClose }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const icons = [
    {
      icon: ColorVKIcon,
      url: "#",
      name: "VKontakte",
    },
    {
      icon: ColorTGIcon,
      url: "#",
      name: "Telegram",
    },
    {
      icon: ColorFaceBookIcon,
      url: "#",
      name: "Facebook",
    },
    {
      icon: ColorInstagramIcon,
      url: "#",
      name: "Instagram",
    },
    {
      icon: ColorOKIcon,
      url: "#",
      name: "Odnoklassniki",
    },
  ];

  return (
    <>
      <div className={cls.FirstCard}>
        <p className={cls.timerText}>Поспешите! Скидка закончится через</p>
        <Timer className={cls.timer} deadline={new Date(2023, 4, 27)} />
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
          <Link href='/cart'>
            <a>
              <MainButton fullWidth className={cls.basketBtn}>
                Добавить в корзину
              </MainButton>
            </a>
          </Link>
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
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <div className={cls.dialog}>
          <div onClick={() => setOpen(false)} className={cls.close}>
            <CloseIcon />
          </div>
          <div className={cls.body}>
            <h3 className={cls.title}>Поделиться товаром</h3>

            <h3>Линк страницы</h3>
            <div className={cls.ssilka}>
              <div>
                <input type='text' placeholder='https://paragraf.uz/' />
              </div>
              <div>
                <MainButton fullWidth className={cls.modalBtn}>
                  Копировать
                </MainButton>
              </div>
            </div>

            <div className={cls.icons}>
              {icons.map((el, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setActive(i);
                  }}
                  className={`${cls.icon} ${active == i && cls.activeIcon}`}
                >
                  <a href='#' className={cls.link}>
                    {el.icon()}
                    {el.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default FirstCard;
