import React, { useState } from "react";
import SetpsWrapper from "../StepsWrapper";
import cls from "./StepOne.module.scss";
import { useCallback } from "react";
import ImgUploader from "./ImgUploader";

function StepOne({ setActiveStep }) {
  const [tabValue, setTabValue] = useState("passport");
  const TabBody = useCallback(
    ({ tab, children }) => {
      if (tab === tabValue) return children;
      return <></>;
    },
    [tabValue]
  );
  return (
    <SetpsWrapper className={cls.stepOne} title="Подтверждение личности">
      <div className={cls.root}>
        <div className={cls.tabs}>
          <div
            onClick={() => {
              setTabValue("passport");
            }}
            className={`${cls.tab} ${
              tabValue === "passport" ? cls.activeTab : ""
            }`}
          >
            Паспорт
          </div>{" "}
          <span>/</span>
          <div
            onClick={() => {
              setTabValue("id");
            }}
            className={`${cls.tab} ${tabValue === "id" ? cls.activeTab : ""}`}
          >
            ID-карта
          </div>
        </div>
        <div className={cls.body}>
          <TabBody tab="passport">
            <ImgUploader />
            <ImgUploader />
            <ImgUploader />
          </TabBody>
          <TabBody tab="id">
            <ImgUploader />
          </TabBody>
        </div>
      </div>
    </SetpsWrapper>
  );
}

export default StepOne;
