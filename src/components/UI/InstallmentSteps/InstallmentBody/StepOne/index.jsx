import React, { useState } from "react";
import SetpsWrapper from "../components/StepsWrapper";
import cls from "./StepOne.module.scss";
// import { useCallback } from "react";
import ImgUploader from "../components/ImgUploader";
import { useForm } from "react-hook-form";
import FormButtons from "../components/FormButtons";
import TabBody from "components/UI/CTabs/TabBody";

function StepOne({ setActiveStep }) {
  const [tabValue, setTabValue] = useState("passport");
  // const TabBody = useCallback(
  //   ({ tab, children }) => {
  //     if (tab === tabValue) return children;
  //     return <></>;
  //   },
  //   [tabValue]
  // );

  const {
    handleSubmit,
    watch,
    control,
    register,
    setValue,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log("data", data);
    setActiveStep(2);
  };
  return (
    <SetpsWrapper className={cls.stepOne} title="Подтверждение личности">
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
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
        <div className={`${cls.body} ${tabValue === "id" ? cls.idCard : ""}`}>
          <TabBody tab="passport" tabValue={tabValue}>
            <ImgUploader
              saveUrl="img1"
              imgUrl="/images/passport1.png"
              watch={watch}
              setValue={setValue}
              label="Фото паспорта"
              description="Фото паспорта с личными данными"
            />
            <ImgUploader
              saveUrl="img2"
              imgUrl="/images/passport3.png"
              watch={watch}
              setValue={setValue}
              label="Селфи с паспортом"
              description="Нам очень важно знать, что вы являетесь владельцем паспорта"
            />
            <ImgUploader
              saveUrl="img3"
              imgUrl="/images/passport2.png"
              watch={watch}
              setValue={setValue}
              label="Фото прописки"
              description="Регистрационные данные должны быть видны"
            />
          </TabBody>
          <TabBody tab="id" tabValue={tabValue}>
            <ImgUploader
              saveUrl="img3"
              imgUrl="/images/idcard.png"
              watch={watch}
              setValue={setValue}
              label="Фото ID-карты"
              description="Информация в паспорте и фото должна быть прочитана"
            />
          </TabBody>
        </div>
        <FormButtons initialStep />
      </form>
    </SetpsWrapper>
  );
}

export default StepOne;
