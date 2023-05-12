import { getProducts, validation } from "features";
import { useDispatchEffect, useValidateRole } from "hooks";
import LinksAside from "./components/aside";
import TitleAside from "./components/title";

const features = [validation, getProducts];

export default function AdminLayout({ children }) {
  useValidateRole(10);
  useDispatchEffect(features);
  return (
    <>
      <main className="flex w-full">
        <aside className="h-[100vh] bg-gray w-1/5 top-0 shadow">
          <TitleAside />
          <LinksAside />
        </aside>
        <div className="w-full">{children}</div>
      </main>
    </>
  );
}
