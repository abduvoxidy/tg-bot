import React from "react";
import ImageGallery from "react-image-gallery";
import { images } from "../data";

function MyImageGallery() {

  const properties = {
    showBullets: false,
    showIndex: false,
    showThumbnails: true,
    lazyLoad: false,
    showPlayButton: false,
    showNav: false,
    showFullscreenButton: false,
    thumbnailPosition: "left",
    items: { images },
  };
  return <ImageGallery {...properties} />;
}

export default MyImageGallery;
