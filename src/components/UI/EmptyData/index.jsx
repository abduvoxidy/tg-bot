import React from "react";
import Image from "next/image";

function EmptyData({ className }) {
  return (
    <div
      style={{ position: "relative", width: "100%", height: "400px" }}
      className={className}
    >
      <Image
        src="/images/empty.webp"
        alt="Empty"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}

export default EmptyData;
