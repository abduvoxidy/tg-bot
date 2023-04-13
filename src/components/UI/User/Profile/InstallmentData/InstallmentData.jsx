import React from "react";
import MainButton from "components/UI/Buttons/MainButton";
import { useForm } from "react-hook-form";
import cls from "./InstallmentData.module.scss";
import { useState } from "react";
import TabBody from "components/UI/CTabs/TabBody";

import ImgUploader from "../components/ImgUploader";

function InstallmentData() {
  const [tabValue, setTabValue] = useState("passport");

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
  };
  
  return (
    <>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.innerTabs}>
          <div className={cls.wrap}>
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
        </div>

        <div className={cls.innerForm}>
          <TabBody tab='passport' tabValue={tabValue}>
            <ImgUploader
              saveUrl='img1'
              imgUrl='/images/passport1.png'
              watch={watch}
              setValue={setValue}
              label='Лицевая сторона паспорта'
            />
            <ImgUploader
              saveUrl='img2'
              imgUrl='/images/passport2.png'
              watch={watch}
              setValue={setValue}
              label='Страница паспорта с пропиской'
            />
            <ImgUploader
              saveUrl='img3'
              imgUrl='/images/passport3.png'
              watch={watch}
              setValue={setValue}
              label='Фото клиента с паспортом'
            />
          </TabBody>
          <TabBody tab='id' tabValue={tabValue}>
            <ImgUploader
              saveUrl='img1'
              imgUrl='/images/passport1.png'
              watch={watch}
              setValue={setValue}
              label='Фото паспорта с личными данными'
            />
          </TabBody>
        </div>
        <MainButton type='submit' className={cls.btn}>
          Сохранить изменения
        </MainButton>
      </form>
    </>
  );
}

export default InstallmentData;
