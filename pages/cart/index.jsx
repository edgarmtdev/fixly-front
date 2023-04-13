import React from "react";
import MyCart from "../../modules/cart";
import { HeadComponent } from "../../components/utils/head";
import { useGetGlobalState } from "hooks/useGetGlobalState";
import { validateSession } from "services/auth";

export default function ShopCar() {
  const data = useGetGlobalState("cart");
  console.log(data);
  return (
    <React.Fragment>
      <HeadComponent title={"Cart | Fixly"} />
      <MyCart products={data.items} />
    </React.Fragment>
  );
}

export async function getServerSideProps(ctx) {
  const data = await validateSession(ctx);
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: { user: data || null } };
}
