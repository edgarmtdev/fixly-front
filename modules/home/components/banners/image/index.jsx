import React from "react";
import Image from "next/image";
import { Container } from "./styled";

const BannerImage = () => {
  return (
    <Container>
      <Image
        src="/images/arduinoUNO.png"
        alt="banner"
        width={600}
        height={471}
      />
    </Container>
  );
};

export default BannerImage;
