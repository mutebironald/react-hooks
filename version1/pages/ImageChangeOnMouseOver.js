import React from "react";
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="https://www.how-old.net/Images/faces2/main003.jpg"
        secondaryImg="https://www.how-old.net/Images/faces2/main003.jpg"
        alt="face1"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        secondaryImg="https://www.how-old.net/Images/faces2/main001.jpg"
        primaryImg="https://www.how-old.net/Images/faces2/main001.jpg"
        alt="face2"
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
