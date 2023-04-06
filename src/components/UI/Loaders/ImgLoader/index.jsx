import ContentLoader from "react-content-loader";

import React from "react";

function ImgLoader({ ...restProps }) {
  const style = {
    position: "absolute",
    zIndex: 99,
    top: "-2px",
  };
  return (
    <ContentLoader
      width={"100%"}
      height={"100%"}
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
      style={style}
      {...restProps}
    >
      <rect x="0" y="0" width={"100%"} height={"100%"} />
    </ContentLoader>
  );
}

export default ImgLoader;
