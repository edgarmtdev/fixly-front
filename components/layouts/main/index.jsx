import { useGetDropdownContext } from "hooks";
import Page from "../Page";

function MainLayout({ children }) {
  const { handleNotViewDropdown } = useGetDropdownContext();

  return (
    <Page>
      <main onClick={handleNotViewDropdown}>
        <section className="container">{children}</section>
      </main>
    </Page>
  );
}

export default MainLayout;
