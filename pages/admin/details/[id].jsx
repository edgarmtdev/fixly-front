import AdminLayout from "components/layouts/admin/Admin";
import { useGetItem, useRouterQuery } from "hooks";
import DetailsToAdmin from "modules/admin/details";

export default function DetailsProductAdmin() {
  const query = useRouterQuery("id");
  const [product] = useGetItem(query, 0);
  return <DetailsToAdmin product={product} />;
}

DetailsProductAdmin.Layout = AdminLayout;
