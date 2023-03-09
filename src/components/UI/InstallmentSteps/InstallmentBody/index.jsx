import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import LastStep from "./LastStep";
import { useCallback } from "react";
import cls from "./InstallmentBody.module.scss";

function InstallmentBody({ activeStep, setActiveStep }) {
  const TabBody = useCallback(
    ({ tab, children }) => {
      if (tab === activeStep) return children;
      return <></>;
    },
    [activeStep]
  );

  return (
    <>
      <TabBody tab={1}>
        <StepOne setActiveStep={setActiveStep} />
      </TabBody>
      <TabBody tab={2}>
        <StepTwo setActiveStep={setActiveStep} />
      </TabBody>
      <TabBody tab={3}>
        <StepThree setActiveStep={setActiveStep} />
      </TabBody>
      <TabBody tab={4}>
        <StepFour setActiveStep={setActiveStep} />
      </TabBody>
      <TabBody tab={5}>
        <LastStep />
      </TabBody>
    </>
  );
}

export default InstallmentBody;
