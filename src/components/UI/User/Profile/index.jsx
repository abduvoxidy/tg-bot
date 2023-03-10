import React from "react";
import cls from "./Profile.module.scss";
import LeftSidebar from "../LeftSidebar";
import { Container } from "@mui/material";
import MainButton from "components/UI/Buttons/MainButton";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
// Import react-circular-progressbar module and styles
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { StyledTabs, StyledTab } from "components/UI/CTabs";
import { useState, useCallback } from "react";
import PersonalData from "./PersonalData/PersonalData";
import InstallmentData from "./InstallmentData/InstallmentData";

const percentage = 76;

function Profile() {
  const [tabValue, setTabValue] = useState("personal");

  const TabBody = useCallback(
    ({ tab, children }) => {
      if (tab === tabValue) return children;
      return <></>;
    },
    [tabValue]
  );
  return (
    <main className={cls.main}>
      <Container>
        <h1>Профиль</h1>
        <div className={cls.box}>
          <LeftSidebar />
          <div className={cls.rightSide}>
            <div className={cls.header}>
              <div>
                <h3>Заполняй свои данные</h3>
                <div className={cls.desc}>
                  <p>1. Чтобы Оформить рассрочку</p>
                  <p>2. Получить бонусы</p>
                </div>
                <div className={cls.btns}>
                  <MainButton className={cls.btn}>
                    бонус: 50 000 cум{" "}
                  </MainButton>
                  <SecondaryButton className={`${cls.btn} ${cls.greenBtn}`}>
                    Лимит рассрочки: 50 000 cум{" "}
                  </SecondaryButton>
                </div>
              </div>
              <div className={cls.progress}>
                <CircularProgressbarWithChildren
                  className={cls.progressBar}
                  value={percentage}
                  strokeWidth={7}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#F8C41B",
                    trailColor: "rgba(0, 0, 0, 0.08)",
                    textColor: "#404040",
                  })}
                >
                  <h2>{`${percentage}%`}</h2>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "22px",
                    }}
                  >
                    заполнено
                  </p>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div className={cls.body}>
              <div className={cls.tabs}>
                <StyledTabs
                  onChange={(e, val) => {
                    setTabValue(val);
                  }}
                  value={tabValue}
                >
                  <StyledTab value="personal" label="Личные данные" />
                  <StyledTab value="installment" label="Данные для рассрочки" />
                </StyledTabs>
              </div>
              <TabBody tab="personal">
                <PersonalData />
              </TabBody>
              <TabBody tab="installment">
                <InstallmentData />
              </TabBody>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Profile;
