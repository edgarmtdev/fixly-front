import LinksAside from "./links/LinksGroup";
import TitleAside from "./title";
import { useContext } from "react";
import { asideContext } from "context/admin/aside";

export default function AsideComponent() {
  const { view, setView } = useContext(asideContext);

  return (
    <div className="z-10">
      {view && (
        <div
          className="top-0 left-0 bg-[#00000078] h-[100vh] w-[100%] tabletL:hidden fixed"
          onClick={() => setView(false)}
        ></div>
      )}
      <aside
        className={`fixed bg-primary-100 h-[100vh] top-0 shadow w-[260px] tabletL:w-[250px] ${
          view
            ? "translate-x-[0%] transition-all duration-200"
            : "translate-x-[-150%] transition-all duration-200"
        } tabletL:translate-x-0 tabletL:flex flex-col tabletL:static`}
      >
        <TitleAside />
        <LinksAside />
      </aside>
    </div>
  );
}
