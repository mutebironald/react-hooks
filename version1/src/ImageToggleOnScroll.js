import React, { useEffect, useState, useRef } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null); //useRef gives us controll over dom elements
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { //useEffect helps us track state when components start and finish componentWillunMount, componentDidUnmount
    //the code until the return gets called when the component first loads / mounts
    window.addEventListener("scroll", scrollHandler);
    setInView(() => {
      return isInView();
    });
    setIsLoading(false); 
    return () => {    //return gets called when a component dismounts/ is un-mounted
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]) //dependency array;

  const [inView, setInView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };
  return isLoading? null :(
    <img
      src={inView ? secondaryImg : primaryImg}
      alt=""
      style={{ width:"200px", height: "200px" }}
      ref={imageRef}
    />
  );
};

export default ImageToggleOnScroll;
