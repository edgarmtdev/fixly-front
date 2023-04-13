import React from "react";
import Image from "next/image";
import { ImageContainer } from "./styled";

const BannerImage = ({ imgURL }) => {
  return (
    <ImageContainer>
      <Image src={`${imgURL}`} alt="banner" width={400} height={350} priority />
    </ImageContainer>
  );
};

export default BannerImage;
