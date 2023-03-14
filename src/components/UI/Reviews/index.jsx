import React from "react";
import TabBody from "components/UI/CTabs/TabBody";
import cls from "./Reviews.module.scss";
import { useState } from "react";
import Question from "./Question";
import SidebarQuestion from "./Question/SidebarQuestion";
import Review from "./Review";
import SidebarReview from "./Review/SidebarReview";

function Reviews({ className }) {
  const [tabValue, setTabValue] = useState("review");

  return (
    <div className={`${cls.reviews} ${className}`}>
      <h1>
        Отзывы и вопросы о товаре <span>46</span>
      </h1>
      <div className={cls.row}>
        <div className={cls.left}>
          <div className={cls.header}>
            <div className={cls.tabs}>
              <div
                className={`${cls.tab} ${
                  tabValue === "review" ? cls.activeTab : ""
                }`}
                onClick={() => setTabValue("review")}
              >
                Отзывы о товаре
              </div>
              <div
                className={`${cls.tab} ${
                  tabValue === "question" ? cls.activeTab : ""
                }`}
                onClick={() => setTabValue("question")}
              >
                Вопросы и ответы о товаре
              </div>
            </div>
          </div>
          <TabBody tab="review" tabValue={tabValue}>
            <Review />
          </TabBody>
          <TabBody tab="question" tabValue={tabValue}>
            <Question />
          </TabBody>
        </div>
        <div className={cls.right}>
          <TabBody tab="review" tabValue={tabValue}>
            <SidebarReview />
          </TabBody>
          <TabBody tab="question" tabValue={tabValue}>
            <SidebarQuestion />
          </TabBody>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
