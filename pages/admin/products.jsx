import { useViewModal } from "components/global/admin/hooks";
import UploadProduct from "components/global/admin/modals/UploadProduct";
import AdminLayout from "components/layouts/admin/Admin";
import { HeadComponent } from "components/utils/head";
import { AUTH_CONSTANTS } from "config/constants";
import ProductsAdminModule from "modules/admin/pages/products";

export default function ProductsAdmin({ user }) {
  const { viewModal, handleNotViewModal, handleViewModal } = useViewModal();
  return (
    <>
      <HeadComponent title={"Products"} />
      <ProductsAdminModule handleViewModal={handleViewModal} user={user} />
      <UploadProduct
        viewModal={viewModal}
        handleNotViewModal={handleNotViewModal}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const token = context.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const res = await fetch(`http://localhost:4000${AUTH_CONSTANTS.validation}`, {
    withCredentials: true,
    headers: {
      Cookie: `token=${token}`,
    },
  });
  const data = await res.json();

  if (!data.success) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { user: data.user } };
}

ProductsAdmin.Layout = AdminLayout;
