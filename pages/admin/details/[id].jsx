import AdminLayout from "components/layouts/admin/Admin";
import { useRouterQuery } from "hooks";
import DetailsToAdmin from "modules/admin/pages/details";

export default function DetailsProductAdmin() {
  const query = useRouterQuery("id");
  return <DetailsToAdmin id={query} />;
}

DetailsProductAdmin.Layout = AdminLayout;
