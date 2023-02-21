import React from "react";
import Enterprise from "./lists/enterprise";
import FormUser from "./form";
import Pages from "./lists/pages";
import Resources from "./lists/resources";
import { Container, FooterContainer, Reserved } from "./styled";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FormUser />
        <div className="lists">
          <Pages />
          <Enterprise />
          <Resources />
        </div>
      </FooterContainer>
      <Reserved>
        <p>@2023 All rights reserved</p>
        <div>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiOutlineTwitter />
        </div>
      </Reserved>
    </Container>
  );
};
export default Footer;
