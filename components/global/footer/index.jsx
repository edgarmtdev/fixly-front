import React from "react";
import Enterprise from "./lists/enterprise";
import FormUser from "./form";
import Pages from "./lists/pages";
import Resources from "./lists/resources";
import { Container, FooterContainer } from "./styled";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FormUser />
        <Pages />
        <Enterprise />
        <Resources />
      </FooterContainer>
    </Container>
  );
};
export default Footer;
