import React from "react";
import cls from "./ImgUploader.module.scss";
import { useRef, useState } from "react";
import { request } from "services/http-client";
import { CloseIcon } from "components/UI/Icons";
import { CircularProgress } from "@mui/material";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";

function ImgUploader({
  watch = () => {},
  setValue = () => {},
  saveUrl = "image",
  imgUrl = "/images/passport1.png",
  className,
  label,
}) {
  const hiddenFileInput = useRef(null);
  const [loader, setLoader] = useState(false);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const uploadImg = (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    hiddenFileInput.current.value = "";
    setLoader(true);
    setTimeout(() => {
      setValue(saveUrl, "/images/passport2.png");
      setLoader(false);
    }, 2000);
    // request
    //   .post("upload", formData, {
    //     headers: {
    //       "Content-Type": "mulpipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     console.log("res", res);
    //     //   setValue(
    //     //     "image",
    //     //     process.env.NEXT_PUBLIC_MINIO_BASE_URL + res.filename
    //     //   );
    //   })
    //   .finally(() => {
    //     setLoader(false);
    //   });
  };

  return (
    <div className={`${cls.imgUpload} ${className}`}>
      <div className={cls.img}>
        {watch(saveUrl) && !loader && (
          <div className={cls.close} onClick={() => setValue(saveUrl, "")}>
            <CloseIcon />
          </div>
        )}

        {loader && (
          <div className={cls.loader}>
            <CircularProgress size={30} />
          </div>
        )}

        <img src={watch(saveUrl) ? watch(saveUrl) : imgUrl} alt="profile" />
        <input
          type="file"
          accept="image/*"
          ref={hiddenFileInput}
          onChange={uploadImg}
          style={{ display: "none" }}
        />
      </div>
      <div className={cls.right}>
        <label>{label || "Фото паспорта с личными данными"}</label>
        <div className={cls.uploader}>
          <p className={cls.text}>Загрузите фото</p>
          <SecondaryButton onClick={handleClick} className={cls.uploadBtn}>
            {"Прикрепить"}
          </SecondaryButton>
        </div>
        <span>Информация из паспорта и фото, должны быть читабельны</span>
      </div>
    </div>
  );
}

export default ImgUploader;
