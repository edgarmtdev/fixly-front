import { dropdownContext } from "context/dropdown";
import { useContext } from "react";
import styled from "styled-components";
import Page from "../Page";

const Principal = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
`;

function MainLayout({ children }) {
  const { handleNotViewDropdown } = useContext(dropdownContext);

  return (
    <>
      <Page>
        <main onClick={handleNotViewDropdown}>
          <Principal>{children}</Principal>
        </main>
      </Page>
    </>
  );
}

export default MainLayout;
