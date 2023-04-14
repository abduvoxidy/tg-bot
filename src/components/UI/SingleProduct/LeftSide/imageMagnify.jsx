import React, { useState } from "react";

import ReactImageMagnify from "react-image-magnify";
import { images } from "../data";

function MyReactImageMagnify() {
  const [img, setImage] = useState(images[0].original);

  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Wristwatch by Ted Baker London",
          isFluidWidth: true,
          src: img,
        },
        largeImage: {
          src: img,
          width: 1600,
          height: 1800,
        },
        enlargedImageContainerStyle: {
          zIndex: "1500",
        },
        enlargedImageContainerDimensions: {
          width: "200%",
          height: "150%",
        },
      }}
    />
  );
}

export default MyReactImageMagnify;
