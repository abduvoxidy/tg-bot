import React from "react";
import InstallmentHeader from "components/UI/InstallmentSteps/InstallmentHeader";
import InstallmentBody from "components/UI/InstallmentSteps/InstallmentBody";
import cls from "./styles.module.scss";
import { useState } from "react";

function Installment() {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <>
      {activeStep < 5 && <InstallmentHeader activeStep={activeStep} />}
      <main className={cls.main}>
        <InstallmentBody
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </main>
      ;
    </>
  );
}

export default Installment;
