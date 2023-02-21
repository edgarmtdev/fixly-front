import React from "react";
import Enterprise from "./enterprise";
import FormUser from "./form";
import Pages from "./pages";
import Resources from "./resources";
import { Container, FooterContainer } from "./styled";

const Footer = () => {
  return (
    <Container>
      <FooterContainer className=" max-w-screen-laptop mx-auto p-20 px-32 grid-footer ">
        <FormUser />
        <Pages />
        <Enterprise />
        <Resources />
      </FooterContainer>
    </Container>
  );
};
export default Footer;
