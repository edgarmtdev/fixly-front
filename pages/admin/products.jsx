import { useViewModal } from "components/global/admin/hooks";
import UploadProduct from "components/global/admin/modals/UploadProduct";
import AdminLayout from "components/layouts/admin/Admin";
import { HeadComponent } from "components/utils/head";
import ProductsAdminModule from "modules/admin/products";

export default function ProductsAdmin() {
  const { viewModal, handleNotViewModal, handleViewModal } = useViewModal();
  return (
    <>
      <HeadComponent title={"Products"} />
      <ProductsAdminModule handleViewModal={handleViewModal} />
      <UploadProduct
        viewModal={viewModal}
        handleNotViewModal={handleNotViewModal}
      />
    </>
  );
}

ProductsAdmin.Layout = AdminLayout;
