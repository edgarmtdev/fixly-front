import { dropdownContext } from "context/dropdown";
import React from "react";
import styled from "styled-components";
import Footer from "/components/global/footer";
import Navbar from "/components/global/navigation";
import { getProducts } from "/features/product";
import useAuthValidate from "/hooks/useAuthValidate";
import useDispatchEffect from "/hooks/useDispatchEffect";

const Principal = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
`;

function MainLayout({ children }) {
  useDispatchEffect(getProducts);
  useAuthValidate();
  const { handleNotViewDropdown } = React.useContext(dropdownContext);

  return (
    <>
      <Navbar />
      <Principal onClick={handleNotViewDropdown}>{children}</Principal>
      <Footer />
    </>
  );
}

export default MainLayout;
