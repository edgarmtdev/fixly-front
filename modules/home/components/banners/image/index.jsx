import Image from "next/image";
import { ImageContainer } from "./styled";

const BannerImage = ({ imgURL }) => {
  return (
    <ImageContainer>
      <Image
        src={`${imgURL}`}
        alt="banner"
        width={500}
        height={500}
        priority
        className="object-contain"
      />
    </ImageContainer>
  );
};

export default BannerImage;
