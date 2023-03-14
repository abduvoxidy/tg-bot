import React from "react";
import cls from "./Question.module.scss";

function SidebarQuestion() {
  return (
    <div className={cls.sidebar}>
      <h3>Как спросить о сервисе PARAGRAF?</h3>
      <p className={cls.desc}>
        О сервисе PARAGRAF, доставке и состоянии заказа выможете узнать в раздел{" "}
        &nbsp;
        <span>Доставка </span> &nbsp; или в чате с &nbsp;
        <span>Поддержкой PARAGRAF</span>
      </p>
    </div>
  );
}

export default SidebarQuestion;
