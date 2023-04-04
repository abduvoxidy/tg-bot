import React from "react";
import cls from "./BannerSkeleton.module.scss";
import { Skeleton } from "@mui/material";

export function BannerSkeleton({ height = 350, className }) {
  return (
    <div className={`${cls.skeleton} ${className}`}>
      <Skeleton
        style={{ borderRadius: "8px" }}
        variant="rectangular"
        width="100%"
        height={height}
      />
    </div>
  );
}
