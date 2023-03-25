import React from "react";
import Image from "next/image";
import { Container } from "./styled";

const BannerImage = ({ imgURL }) => {
  return (
    <Container>
      <Image src={`${imgURL}`} alt="banner" layout={"fill"} objectFit="fill" />
    </Container>
  );
};

export default BannerImage;
