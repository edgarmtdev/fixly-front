import { dropdownContext } from "context/dropdown";
import React from "react";
import styled from "styled-components";
import Footer from "/components/global/footer";
import Navbar from "/components/global/navigation";
import { getProducts } from "/features/product";
import useDispatchEffect from "hooks/useDispatchEffect";

const Principal = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
`;

function MainLayout({ children }) {
  useDispatchEffect(getProducts);
  const { handleNotViewDropdown } = React.useContext(dropdownContext);

  return (
    <>
      <Navbar />
      <main onClick={handleNotViewDropdown}>
        <Principal>{children}</Principal>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
