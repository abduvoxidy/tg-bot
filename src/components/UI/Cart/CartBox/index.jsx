import React from "react";
import cls from "./CartBox.module.scss";
import Image from "next/image";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { InfoIcon, HeartIcon, CloseIcon } from "components/UI/Icons";
import CartButton from "../CartButton";
import { useDispatch } from "react-redux";
import { decrement, increment } from "store/counter/counterSlice";
import { useSelector } from "react-redux";
import { selectCount } from "store/counter/counterSlice";
import MainButton from "components/UI/Buttons/MainButton";
import Tooltip from "@mui/material/Tooltip";
import { useRef } from "react";
import { useStyles } from "./styles";
import Link from "next/link";

function CartBox() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const positionRef = useRef({
    x: 0,
    y: 0,
  });
  const popperRef = useRef(null);
  const areaRef = useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };
  return (
    <div className={cls.root}>
      <div className={cls.card}>
        <div className={cls.header}>
          <p className={cls.countTitle}>Всего: 5 товара</p>
          <div className={cls.clear}>
            <span>
              <DeleteForeverOutlinedIcon />
            </span>
            <p className={cls.clearTitle}>Очистить корзину</p>
          </div>
        </div>
        <div className={cls.body}>
          <div className={cls.products}>
            <div className={cls.product}>
              <div className={cls.left}>
                <div className={cls.img}>
                  <Image
                    src="/images/phones/black.png"
                    objectFit="contain"
                    layout="fill"
                    alt="phone"
                  />
                </div>
                <div className={cls.content}>
                  <p className={cls.name}>
                    iPhone 14 Pro{" "}
                    <span>
                      <InfoIcon />
                    </span>
                  </p>
                  <div className={cls.contentBottom}>
                    <p>
                      <span>
                        <HeartIcon />
                      </span>
                      В избранное
                    </p>
                    <p>
                      <span>
                        <CloseIcon />
                      </span>
                      Удалить
                    </p>
                  </div>
                </div>
              </div>
              <div className={cls.right}>
                <p className={cls.price}>12 324 000 сум</p>
                <CartButton
                  increment={() => dispatch(increment())}
                  decrement={() => dispatch(decrement())}
                  count={count}
                  className={cls.cartBtn}
                />
              </div>
            </div>
            <div className={cls.product}>
              <div className={cls.left}>
                <div className={cls.img}>
                  <Image
                    src="/images/phones/blue.png"
                    objectFit="contain"
                    layout="fill"
                    alt="phone"
                  />
                </div>
                <div className={cls.content}>
                  <p className={cls.name}>
                    iPhone 13 Pro{" "}
                    <Tooltip
                      className={classes.root}
                      title="Объем оперативной памяти – один из важнейших параметров для производительности системы. Чем больше объем."
                      placement="top"
                      arrow
                    >
                      <span ref={areaRef} onMouseMove={handleMouseMove}>
                        <InfoIcon />
                      </span>
                    </Tooltip>
                  </p>
                  <div className={cls.contentBottom}>
                    <p>
                      <span>
                        <HeartIcon />
                      </span>
                      В избранное
                    </p>
                    <p>
                      <span>
                        <CloseIcon />
                      </span>
                      Удалить
                    </p>
                  </div>
                </div>
              </div>
              <div className={cls.right}>
                <p className={cls.price}>12 324 000 сум</p>
                <CartButton
                  increment={() => dispatch(increment())}
                  decrement={() => dispatch(decrement())}
                  count={count}
                  className={cls.cartBtn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.total}>
        <div className={cls.row}>
          <h3>Итого</h3>
          <h3>15 342 500 сум</h3>
        </div>
        <div className={cls.row}>
          <p>Товары, 2 шт</p>
          <p>15 850 000 сум</p>
        </div>
        <div className={cls.row}>
          <p>Скидка</p>
          <p>– 507 500 сум</p>
        </div>
        <Link href="/checkout">
          <a>
            <MainButton fullWidth className={cls.btn}>
              Перейти к оформлению
            </MainButton>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default CartBox;
