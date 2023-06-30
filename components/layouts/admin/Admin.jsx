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
      <main className="flex">
        <AsideComponent />
        <section className="w-full">{children}</section>
      </main>
    </AsideContext>
  );
}
