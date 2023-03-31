import { dropdownContext } from "context/dropdown";
import React from "react";
import styled from "styled-components";
import Footer from "/components/global/footer";
import Navbar from "/components/global/navigation";
import { getProducts } from "/features/product";
import useAuthValidate from "/hooks/useAuthValidate";
import useDispatchEffect from "/hooks/useDispatchEffect";

const Principal = styled.div`
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
      <div onClick={handleNotViewDropdown}>
        <Principal>{children}</Principal>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
