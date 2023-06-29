import LinksAside from "./links/LinksGroup";
import TitleAside from "./title";
import { useContext } from "react";
import { asideContext } from "context/admin/aside";

export default function AsideComponent() {
  const { view, setView } = useContext(asideContext);

  return (
    <>
      {view && (
        <div
          className="absolute z-10 top-0 left-0 bg-[#00000078] h-[100vh] w-[100%] tabletL:hidden"
          onClick={() => setView(false)}
        ></div>
      )}
      <aside
        className={`bg-primary-100 h-[100vh] top-0 shadow z-30 w-[300px] ${
          view
            ? "translate-x-[0%] transition-all duration-200"
            : "translate-x-[-150%] transition-all duration-200"
        } tabletL:translate-x-0 absolute tabletL:flex flex-col tabletL:static`}
      >
        <TitleAside />
        <LinksAside />
      </aside>
    </>
  );
}
