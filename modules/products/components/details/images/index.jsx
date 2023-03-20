import React from "react";

const ImageSlider = ({ imgURL }) => {
  return (
    <div>
      <img src={`${imgURL}`} alt="product" />
    </div>
  );
};

export default ImageSlider;
