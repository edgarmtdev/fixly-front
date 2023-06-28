import { getProducts, validation } from "features";
import { useDispatchEffect, useValidateRole } from "hooks";
import AsideComponent from "./components/aside/AsideComponent";
import AsideContext from "context/admin/aside/Provider";

const features = [validation, getProducts];

export default function AdminLayout({ children }) {
  useValidateRole(10);
  useDispatchEffect(features);

  return (
    <AsideContext>
      <main className="flex w-full">
        <AsideComponent />
        <section className="w-full z-0">{children}</section>
      </main>
    </AsideContext>
  );
}
