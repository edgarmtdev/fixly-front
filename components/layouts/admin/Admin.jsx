import { getProducts, validation } from "features";
import { useDispatchEffect, useValidateRole } from "hooks";
import Link from "next/link";

const features = [validation, getProducts];

export default function AdminLayout({ children }) {
  useValidateRole(10);
  useDispatchEffect(features);
  return (
    <>
      <main className="flex w-full">
        <aside className="h-[100vh] bg-gray w-1/5 top-0 shadow">
          <div className="p-4">
            <h2>LOGO</h2>
          </div>
          <ul>
            <Link href={"/admin/create"}>
              <li className="p-4 hover:bg-white cursor-pointer">Products</li>
            </Link>
          </ul>
        </aside>
        <div className="w-full">{children}</div>
      </main>
    </>
  );
}
