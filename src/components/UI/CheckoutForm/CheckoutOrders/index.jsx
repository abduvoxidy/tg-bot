import React from "react";
import cls from "./CheckoutOrders.module.scss";
import CartButton from "components/UI/Buttons/CartButton";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import { InfoIcon, HeartIcon, CloseIcon } from "components/UI/Icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { increment, decrement, selectCount } from "store/counter/counterSlice";

function CheckoutOrders() {
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
      <div className={cls.body}>
        <div className={cls.products}>
          {[0, 1].map((el) => (
            <div key={el} className={cls.product}>
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
                      //   className={classes.root}
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default CheckoutOrders;
