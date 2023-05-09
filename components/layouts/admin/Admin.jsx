import { getCart, validation } from "features";
import { useDispatchEffect } from "hooks";
import { useValidateRole } from "hooks/useValidateRole";

const features = [validation, getCart];

export default function AdminLayout({ children }) {
  useValidateRole(10);
  useDispatchEffect(features);
  return (
    <>
      <main className="flex w-full">
        <aside className="h-[100vh] bg-gray w-100 top-0 shadow">ASIDE</aside>
        <div className="w-full">{children}</div>
      </main>
    </>
  );
}
