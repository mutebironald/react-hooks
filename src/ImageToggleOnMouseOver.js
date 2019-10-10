import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
        console.log(imageRef.current.src, 'ref')
      }}
      src={primaryImg}
      alt=""
      style={{ height: "355px" }}
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseOver;
