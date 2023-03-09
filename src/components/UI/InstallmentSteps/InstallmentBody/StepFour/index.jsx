import React from "react";
import cls from "./StepFour.module.scss";
import SetpsWrapper from "../components/StepsWrapper";
import { PaymentCardIcon } from "components/UI/Icons";
import { useState } from "react";
import { CheckedIcon, PlusIcon } from "components/UI/Icons";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import FormButtons from "../components/FormButtons";
import AddCard from "components/UI/AddCard";

const data = [
  {
    card_num: "1234567812345678",
    card_expire_date: "12/23",
  },
  {
    card_num: "1234567812343421",
    card_expire_date: "12/25",
  },
  {
    card_num: "1234567812349587",
    card_expire_date: "11/23",
  },
];

function StepFour({ setActiveStep }) {
  const [cards, setCards] = useState(data);
  const [cardId, setCardId] = useState(data[0].card_num);
  const [open, setOpen] = useState(false);
  return (
    <>
      <SetpsWrapper title="Данные пластик карты" className={cls.stepFour}>
        <div className={cls.cards}>
          {cards && cards.length ? (
            <div className={cls.list}>
              {cards.map((item) => (
                <div
                  key={item.card_num}
                  className={cls.item}
                  onClick={() => {
                    setCardId(item.card_num);
                  }}
                >
                  <div className={cls.leftItem}>
                    <PaymentCardIcon />
                    <div className={cls.cardInfo}>
                      <span>
                        <div>•••• •••• •••• </div>
                        {item.card_num.substring(12, 16)}
                      </span>
                      <span>{item.card_expire_date}</span>
                    </div>
                  </div>
                  <div className={cls.rightItem}>
                    {item.card_num === cardId ? (
                      <CheckedIcon />
                    ) : (
                      <div className={cls.circle} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={cls.empty}>
              <h3 className={cls.title}>Привязанной карты пока нет</h3>
              <p className={cls.text}>
                Радуйте себя быстрыми платежами, сохраняя свои карты на долгий
                срок
              </p>
            </div>
          )}
          <SecondaryButton
            onClick={() => {
              setOpen(true);
            }}
            icon={<PlusIcon />}
            size="medium"
            className={cls.addBtn}
          >
            {cards.length > 0 ? "Добавить новую карту " : "Добавить карту "}
          </SecondaryButton>
        </div>
        <FormButtons
          handleBack={() => {
            setActiveStep((prev) => prev - 1);
          }}
          handleNext={() => {
            setActiveStep((prev) => prev + 1);
          }}
        />
      </SetpsWrapper>
      <AddCard open={open} setOpen={setOpen} />
    </>
  );
}

export default StepFour;
