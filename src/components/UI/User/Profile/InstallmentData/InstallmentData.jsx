import React from "react";
import MainButton from "components/UI/Buttons/MainButton";
import { useForm } from "react-hook-form";
import cls from "./InstallmentData.module.scss";
import { useCallback } from "react";
import { useState } from "react";

import ImgUploader from "../components/ImgUploader";

function InstallmentData() {
  const [tabValue, setTabValue] = useState("passport");
  const TabBody = useCallback(
    ({ tab, children }) => {
      if (tab === tabValue) return children;
      return <></>;
    },
    [tabValue]
  );
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
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={cls.innerTabs}>
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
      <div className={cls.innerForm}>
        <TabBody tab="passport">
          <ImgUploader
            saveUrl="img1"
            imgUrl="/images/passport1.png"
            watch={watch}
            setValue={setValue}
            label="Фото паспорта с личными данными"
          />
          <ImgUploader
            saveUrl="img2"
            imgUrl="/images/passport2.png"
            watch={watch}
            setValue={setValue}
            label="Загрузите фото прописки с паспорта"
          />
          <ImgUploader
            saveUrl="img3"
            imgUrl="/images/passport3.png"
            watch={watch}
            setValue={setValue}
            label="Загрузите фото лица на фоне паспорта"
          />
        </TabBody>
        <TabBody tab="id">
          <ImgUploader
            saveUrl="img1"
            imgUrl="/images/passport1.png"
            watch={watch}
            setValue={setValue}
            label="Фото паспорта с личными данными"
          />
        </TabBody>
      </div>
      <MainButton type="submit" className={cls.btn}>
        Сохранить изменения{" "}
      </MainButton>
    </form>
  );
}

export default InstallmentData;
