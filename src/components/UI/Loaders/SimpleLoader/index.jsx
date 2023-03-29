import React from "react";

import cls from "./SimpleLoader.module.scss";

function SimpleLoader({ className }) {
  return (
    <div className={`${cls.wrapper} ${className}`}>
      <span className={cls.loader}></span>
    </div>
  );
}

export default SimpleLoader;
