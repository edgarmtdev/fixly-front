import React from "react";
import styled from "styled-components";
import Footer from "../../../components/global/footer";
import Navbar from "../../../components/global/navigation";
import { getProducts } from "../../../features/product";
import useAuthValidate from "../../../hooks/useAuthValidate";
import useDispatchEffect from "../../../hooks/useDispatchEffect";

const Principal = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
`;

function MainLayout({ children }) {
  useAuthValidate();
  useDispatchEffect(getProducts);

  return (
    <React.Fragment>
      <Navbar />
      <Principal>{children}</Principal>
      <Footer />
    </React.Fragment>
  );
}

export default MainLayout;
