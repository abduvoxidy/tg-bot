import React from "react";
import cls from "./ImgUploader.module.scss";
import { InfoIcon } from "components/UI/Icons";
import { useRef, useState } from "react";
import { CircularProgress } from "@mui/material";

import {
  CollapseFileIcon,
  UploadDeleteIcon,
  UploadSuccessIcon,
} from "components/UI/Icons";

function ImgUploader({
  watch = () => {},
  setValue = () => {},
  saveUrl = "image",
  imgUrl = "/images/passport1.png",
  className,
  label,
  description,
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
    <div className={cls.card}>
      <div className={cls.cardHeader}>
        <p>{label}</p>
        <span>
          <InfoIcon />
        </span>
      </div>
      <div className={cls.cardBody}>
        <div className={cls.img}>
          {loader && (
            <div className={cls.loader}>
              <CircularProgress size={30} />
            </div>
          )}
          <img src={watch(saveUrl) ? watch(saveUrl) : imgUrl} alt="profile" />
        </div>

        <input
          type="file"
          accept="image/*"
          ref={hiddenFileInput}
          onChange={uploadImg}
          style={{ display: "none" }}
        />
        <p className={cls.description}>{description}</p>
      </div>

      {watch(saveUrl) && !loader ? (
        <div className={cls.removeBtn} onClick={() => setValue(saveUrl, "")}>
          <UploadSuccessIcon />
          <p>image_01.jpg</p>
          <span className={cls.delete}>
            <UploadDeleteIcon />
          </span>
        </div>
      ) : (
        <div className={cls.uploadBtn} onClick={handleClick}>
          <CollapseFileIcon />
          <p>Прикрепить файл</p>
        </div>
      )}
    </div>
  );
}

export default ImgUploader;
