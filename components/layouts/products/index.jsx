import React from "react";
import styled from "styled-components";
import Footer from "../../global/footer";
import Navbar from "../../global/navigation";

export const LayoutCont = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
`;

export default function ProductsLayout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <LayoutCont>{children}</LayoutCont>
      {/* <Footer /> */}
    </React.Fragment>
  );
}
