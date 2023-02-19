import React from "react";
import styled from "styled-components";

export const AuthCont = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export default function AuthLayout({ children }) {
  return <AuthCont>{children}</AuthCont>;
}
