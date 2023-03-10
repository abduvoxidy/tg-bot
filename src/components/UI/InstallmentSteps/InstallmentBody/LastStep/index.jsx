import React from "react";
import cls from "./LastStep.module.scss";
import SetpsWrapper from "../components/StepsWrapper";
import MainButton from "components/UI/Buttons/MainButton";
import { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useStyles } from "./styles";
import { VectorIcon } from "components/UI/Icons";
import Link from "next/link";

export const accordianData = [
  {
    id: "panel1a-header",
    controls: "panel1a-content",
    title: "Персональные данные",
    content: [
      { name: "Имя:", value: "Akbar" },
      { name: "Фамилия:", value: "Saidmalikov" },
      { name: "Отчество:", value: "Ilxomov" },
      { name: "Пол:", value: "Мужчина" },
      { name: "Имя:", value: "Akbar" },
      { name: "Дата рождения::", value: "23.06.1999" },
      { name: "Дополнительный номер: ", value: "998382238328" },
      { name: "Домашний номер: ", value: "998382238328" },

      { name: "Серия паспорта: ", value: "AB" },

      { name: "Номер паспорта: ", value: "3434355" },
    ],
  },
  {
    id: "panel2a-header",
    controls: "panel2a-content",
    title: "Детали рассрочки",
    content: "faq_answer_2",
  },
  {
    id: "panel3a-header",
    controls: "panel3a-content",
    title: "Товары",
    content: "faq_answer_3",
  },
  {
    id: "panel4a-header",
    controls: "panel4a-content",
    title: "1 - контактное лицо",
    content: "faq_answer_4",
  },
  {
    id: "panel4a-header",
    controls: "panel4a-content",
    title: "2 - контактное лицо",
    content: "faq_answer_4",
  },
];

function LastStep() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <SetpsWrapper className={cls.lastStep} title="Заявка на рассрочку">
      <div className={cls.header}>
        <div className={cls.left}>
          <h2>Iman</h2>
          <p>Номер договора: 12345</p>
          <p>Товары: Холодильник</p>
        </div>
        <div className={cls.right}>
          <p className={cls.price}>120 000 cум</p>
          <p className={cls.date}>12/08/2021</p>
        </div>
      </div>
      <div className={cls.installmentData}>
        <h2>Данные рассрочки</h2>
      </div>
      <div className={cls.accordian}>
        <div className={classes.root}>
          {accordianData?.map((elm, index) => (
            <Accordion
              expanded={expanded === elm.title}
              key={index}
              onChange={handleChange(elm.title)}
            >
              <AccordionSummary
                expandIcon={<VectorIcon />}
                aria-controls={elm.controls}
                id={elm.id}
              >
                <div className={cls.row}>
                  <p className={cls.title}>{elm?.title}</p>
                  <p className={cls.more}>Посмотреть детали</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {Array.isArray(elm.content)
                  ? elm.content.map((el, i) => (
                      <div key={el.value + i} className={cls.content}>
                        <p className={cls.name}>{el.name}</p>
                        <p className={cls.value}>{el.value}</p>
                      </div>
                    ))
                  : elm.content}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
      <Link href="/">
        <a>
          <MainButton className={cls.sendBtn}>Отправить на проверку</MainButton>
        </a>
      </Link>
    </SetpsWrapper>
  );
}

export default LastStep;
