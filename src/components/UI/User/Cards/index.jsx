import React, { useState } from "react";
import cls from "./Cards.module.scss";
import LeftSidebar from "../LeftSidebar";
import { Container } from "@mui/material";
import MainButton from "components/UI/Buttons/MainButton";
import { PaymentCardIcon, DeleteIcon, PlusIcon } from "components/UI/Icons";
import DeleteCardConfirmModal from "./DeleteCardConfirmModal";
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

export function Cards() {
  const [cards, setCards] = useState(data);
  const [cardId, setCardId] = useState(null);
  const [open, setOpen] = useState(false);
  const deleteCard = (id) => {
    setCardId(null);
    const newArr = cards.filter((el) => el.card_num !== id);
    setCards(newArr);
  };
  return (
    <>
      <main className={cls.main}>
        <Container>
          <h1>Мои карты</h1>
          <div className={cls.box}>
            <LeftSidebar />
            <div className={cls.rightSide}>
              {cards && cards.length ? (
                <div className={cls.list}>
                  {cards.map((item) => (
                    <div key={item.card_num} className={cls.item}>
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
                      <div
                        className={cls.rightItem}
                        onClick={() => {
                          setCardId(item.card_num);
                        }}
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={cls.empty}>
                  <h3 className={cls.title}>Привязанной карты пока нет</h3>
                  <p className={cls.text}>
                    Радуйте себя быстрыми платежами, сохраняя свои карты на
                    долгий срок
                  </p>
                </div>
              )}

              <MainButton
                onClick={() => {
                  setOpen(true);
                }}
                icon={<PlusIcon />}
                size="medium"
                className={cls.addBtn}
              >
                {cards.length > 0 ? "Добавить новую карту " : "Добавить карту "}
              </MainButton>
            </div>
          </div>
        </Container>
      </main>
      <DeleteCardConfirmModal
        confrimFn={() => {
          deleteCard(cardId);
        }}
        open={cardId}
        handleClose={() => setCardId(null)}
      />
      <AddCard setOpen={setOpen} open={open} />
    </>
  );
}
