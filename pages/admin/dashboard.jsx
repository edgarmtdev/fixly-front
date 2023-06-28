import AdminLayout from "components/layouts/admin/Admin";
import { HeadComponent } from "components/utils/head";
import DashboardAdminModule from "modules/admin/modules/dashboard";

export default function Dashboard() {
  return (
    <>
      <HeadComponent title={"Dashboard"} />
      <DashboardAdminModule />
    </>
  );
}

Dashboard.Layout = AdminLayout;
