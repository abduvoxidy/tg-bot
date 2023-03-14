import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import LastStep from "./LastStep";
import cls from "./InstallmentBody.module.scss";
import TabBody from "components/UI/CTabs/TabBody";

function InstallmentBody({ activeStep, setActiveStep }) {
  return (
    <>
      <TabBody tab={1} tabValue={activeStep}>
        <StepOne setActiveStep={setActiveStep} />
      </TabBody>
      <TabBody tab={2} tabValue={activeStep}>
        <StepTwo setActiveStep={setActiveStep} />
      </TabBody>
      <TabBody tab={3} tabValue={activeStep}>
        <StepThree setActiveStep={setActiveStep} />
      </TabBody>
      <TabBody tab={4} tabValue={activeStep}>
        <StepFour setActiveStep={setActiveStep} />
      </TabBody>
      <TabBody tab={5} tabValue={activeStep}>
        <LastStep />
      </TabBody>
    </>
  );
}

export default InstallmentBody;
