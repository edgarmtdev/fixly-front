import React from "react";
import styled from "styled-components";
import Footer from "../../global/footer";
import Navbar from "../../global/navigation";
import useAuthValidate from "hooks/useAuthValidate";

export const LayoutCont = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
  min-height: 100vh;
`;

export default function ProductsLayout({ children }) {
  useAuthValidate();
  return (
    <React.Fragment>
      <Navbar />
      {/* TODO: add sidebar */}
      <LayoutCont>{children}</LayoutCont>
      <Footer />
    </React.Fragment>
  );
}
