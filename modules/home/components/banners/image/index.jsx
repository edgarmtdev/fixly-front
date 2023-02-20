import React from "react";
import Image from "next/image";
import { Container } from "./styled";

const BannerImage = ({ imgURL }) => {
  return (
    <Container>
      <Image src={`${imgURL}`} alt="banner" width={600} height={471} />
    </Container>
  );
};

export default BannerImage;
