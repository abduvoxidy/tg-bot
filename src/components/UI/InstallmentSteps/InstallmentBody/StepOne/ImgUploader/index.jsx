import React from "react";
import cls from "./ImgUploader.module.scss";
import { InfoIcon } from "components/UI/Icons";

import { CollapseFileIcon } from "components/UI/Icons";
function ImgUploader() {
  return (
    <div className={cls.card}>
      <div className={cls.cardHeader}>
        <p>Фото паспорта</p>
        <span>
          <InfoIcon />
        </span>
      </div>
      <div className={cls.cardBody}>
        <img className={cls.img} src="/images/passport1.png" alt="passport1" />
        <p className={cls.description}>
          Информация в паспорте и фото должна быть прочитана
        </p>
      </div>
      <div className={cls.uploadBtn}>
        <CollapseFileIcon />
        <p>Прикрепить файл</p>
      </div>
    </div>
  );
}

export default ImgUploader;
