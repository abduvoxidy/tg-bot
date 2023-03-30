import React from "react";
import cls from "./BannerSkeleton.module.scss";
import { Skeleton } from "@mui/material";

function BannerSkeleton({ height = 350 }) {
  return (
    <div className={cls.skeleton}>
      <Skeleton
        style={{ borderRadius: "8px" }}
        variant="rectangular"
        width="100%"
        height={height}
      />
    </div>
  );
}

export default BannerSkeleton;
