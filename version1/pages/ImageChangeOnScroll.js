import React from "react";
import ImageToggleOnScroll from '../src/ImageToggleOnScroll'

const ImageChangeOnScroll = () => {
  return (
    <div>
      {
        [1,2,3,4,5,6,7,8,9].map(speakerId => {
          return (
            <div key={speakerId}>
              <ImageToggleOnScroll
              primaryImg={`https://www.how-old.net/Images/faces2/main00${speakerId}.jpg`}
              secondaryImg={`https://www.how-old.net/Images/faces2/main00${speakerId}.jpg`}
              alt=""
              />

            </div>
          )
        })
      }
    </div>
  );
};

export default ImageChangeOnScroll;
