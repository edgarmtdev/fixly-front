import React from "react";
import styled from "styled-components";
import Navbar from "../../../components/global/navigation";
import Footer from "../../../components/global/footer";
import useDispatchEffect from "../../../hooks/useDispatchEffect";
import { getProducts } from "../../../features/product";
import Banner from "../../../modules/home/components/banners";

const Principal = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
`;

function MainLayout({ children }) {
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
