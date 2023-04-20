import styled from "styled-components";
import Page from "../Page";

export const Layout = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
  min-height: 100vh;
`;

export default function ProductsLayout({ children }) {
  return (
    <>
      <Page>
        <Layout>{children}</Layout>
      </Page>
    </>
  );
}
