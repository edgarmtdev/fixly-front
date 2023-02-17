import React from "react";
import styled from "styled-components";
import Navbar from "../../components/global/Navigation";
import Footer from "../../components/global/Footer";

const Layout = styled.main`
  padding: 1rem;
`;

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Layout>{children}</Layout>
      <Footer />
    </>
  );
}

export default MainLayout;
