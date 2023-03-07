import React from "react";
import StepOne from "./StepOne";
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
      <TabBody tab={2}>Step 2</TabBody>
      <TabBody tab={3}>Step 3</TabBody>
      <TabBody tab={4}>Step 4</TabBody>
    </>
  );
}

export default InstallmentBody;
