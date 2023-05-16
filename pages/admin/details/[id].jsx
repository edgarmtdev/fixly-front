import AdminLayout from "components/layouts/admin/Admin";
import { useRouterQuery } from "hooks";

export default function DetailsProductAdmin() {
  const query = useRouterQuery("id");
  console.log(query);
  return <div>DetailsAdmin</div>;
}

DetailsProductAdmin.Layout = AdminLayout;
