import React from "react";
import styled from "styled-components";
import Navbar from "../../components/global/Navigation";
import Footer from "../../components/global/Footer";
import useDispatchEffect from "../../hooks/useDispatchEffect";
import { getProducts } from "../../features/product";

const Layout = styled.main`
  padding: 1rem;
`;

function MainLayout({ children }) {
  useDispatchEffect(getProducts);

  return (
    <>
      <Navbar />
      <Layout>{children}</Layout>
      <Footer />
    </>
  );
}

export default MainLayout;
