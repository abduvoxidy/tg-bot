import React, { useState } from "react";
import { Dialog } from "@mui/material";
import cls from "./CheckoutModal.module.scss";
import { useStyles } from "./styles";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import MainButton from "components/UI/Buttons/MainButton";
import { useCallback } from "react";
import YandexMap from "./Map";
import Delivery from "./Delivery";
import PickUp from "./PickUp";

function CheckoutModal({ isOpen, setIsOpen = () => {} }) {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState("delivery");
  const handleTab = (tab) => {
    setTabValue(tab);
  };

  const TabBody = useCallback(
    ({ tab, children }) => {
      if (tab === tabValue) return children;
      return <></>;
    },
    [tabValue]
  );

  return (
    <Dialog
      className={classes.root}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={cls.dialog}>
        <div className={cls.leftSide}>
          <div>
            <h2>Выберите способ получения</h2>
            <p className={cls.text}>Чтобы увидеть актуальное для вас меню</p>
            <div className={cls.btns}>
              <SecondaryButton
                onClick={() => handleTab("delivery")}
                className={`${cls.btn} ${
                  tabValue === "delivery" ? cls.activeBtn : ""
                }`}
              >
                Доставка
              </SecondaryButton>
              <SecondaryButton
                onClick={() => handleTab("pickup")}
                className={`${cls.btn} ${
                  tabValue === "pickup" ? cls.activeBtn : ""
                }`}
              >
                Самовывоз
              </SecondaryButton>
            </div>
            <div className={cls.body}>
              <TabBody tab="delivery">
                <Delivery />
              </TabBody>
              <TabBody tab="pickup">
                <PickUp />
              </TabBody>
            </div>
          </div>
          <MainButton type="submit" fullWidth>
            Выбрать
          </MainButton>
        </div>
        <div className={cls.rightSide}>
          <YandexMap />
        </div>
      </div>
    </Dialog>
  );
}

export default CheckoutModal;
