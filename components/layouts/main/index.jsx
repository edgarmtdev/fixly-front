import DropdownUser from "components/global/navigation/options/logged/dropdown";
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
  const { view, handleNotViewDropdown } = React.useContext(dropdownContext);

  return (
    <>
      {view && <DropdownUser />}
      <Navbar />
      <div onClick={handleNotViewDropdown}>
        <Principal>{children}</Principal>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
