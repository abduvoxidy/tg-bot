import React from "react";
import cls from "./ImgUpload.module.scss";
import { AddImgIcon } from "components/UI/Icons";

function ImgUpload() {
  return (
    <div className={cls.imgUpload}>
      <p className={cls.title}>Добавьте фото</p>
      <div className={cls.box}>
        <div className={cls.center}>
          <span>
            <AddImgIcon />
          </span>
          <p>
            {" "}
            <span className={cls.link}>Нажмите на ссылку</span>, чтобы выбрать
            фотографии или просто перетащите их сюда
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImgUpload;
