import React from "react";
import styled from "styled-components";
import NavbarAuth from "../../auth/navigation";

export const AuthCont = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/bg/background.png");
  background-repeat: no-repeat;
  background-position-x: 100%;
`;

export default function AuthLayout({ children }) {
  return (
    <React.Fragment>
      <NavbarAuth />
      <AuthCont>{children}</AuthCont>
    </React.Fragment>
  );
}
