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
  padding: 0.5rem;
`;

const Layout = styled.main`
  padding: 0.5rem;
  margin: 0 auto;
`;

function MainLayout({ children }) {
  useDispatchEffect(getProducts);

  return (
    <React.Fragment>
      <Navbar />
      <Principal>
        {/* <Banner /> */}
        <Layout>{children}</Layout>
      </Principal>
      <Footer />
    </React.Fragment>
  );
}

export default MainLayout;
