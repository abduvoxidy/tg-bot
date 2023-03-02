import React from "react";
import MainButton from "components/UI/Buttons/MainButton";
import { useForm } from "react-hook-form";
import cls from "./Profile.module.scss";

import ImgUploader from "./components/ImgUploader";

function InstallmentData() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cls.innerForm}>
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
      </div>
      <MainButton type="submit" className={cls.btn}>
        Сохранить изменения{" "}
      </MainButton>
    </form>
  );
}

export default InstallmentData;
