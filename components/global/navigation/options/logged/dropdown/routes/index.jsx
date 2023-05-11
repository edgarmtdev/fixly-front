import { useGetDropdownContext, useGetGlobalState } from "hooks";
import Link from "next/link";
import { DROPDOWN_ITEMS, DROPDOWN_ITEMS_ADMIN } from "../model";
import { Route } from "../utils/Route";

export default function Routes() {
  const { handleNotViewDropdown } = useGetDropdownContext();
  const { role } = useGetGlobalState("user");
  return (
    <>
      {DROPDOWN_ITEMS.map((item, index) => (
        <Link key={index} href={item.route}>
          <Route onClick={handleNotViewDropdown}>
            <p>{item.title}</p>
          </Route>
        </Link>
      ))}
      {role >= 10 &&
        DROPDOWN_ITEMS_ADMIN.map((item, index) => (
          <Link key={index} href={item.route}>
            <Route onClick={handleNotViewDropdown}>
              <p>{item.title}</p>
            </Route>
          </Link>
        ))}
    </>
  );
}
