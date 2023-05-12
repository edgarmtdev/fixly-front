import AdminLayout from "components/layouts/admin/Admin";
import { HeadComponent } from "components/utils/head";
import ProductsAdminModule from "modules/admin/products";

export default function ProductsAdmin() {
  return (
    <>
      <HeadComponent title={"Products"} />
      <ProductsAdminModule />
    </>
  );
}

ProductsAdmin.Layout = AdminLayout;
