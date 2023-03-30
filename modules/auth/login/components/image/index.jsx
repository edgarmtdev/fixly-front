import Image from "next/image";
import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

const Container = styled.div`
  display: grid;
  place-items: center;
  padding: 1.5rem;
  display: none;
  @media ${BREAKPOINTS_DEVICES.laptop} {
    display: block;
  }
`;

const ImageLogin = () => {
  return (
    <Container>
      <Image src="/images/loginImg.svg" alt="" width={350} height={250} />
    </Container>
  );
};

export default ImageLogin;
