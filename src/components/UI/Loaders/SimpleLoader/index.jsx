import React from "react";

import cls from "./SimpleLoader.module.scss";

function SimpleLoader({ className }) {
  return <span className={cls.loader}></span>;
}

export default SimpleLoader;
