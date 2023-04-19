import React from "react";
import AuthLayout from "components/layouts/auth";
import { HeadComponent } from "components/utils/head";
import LoginModule from "modules/auth/login";
import { validateSession } from "services/auth";
import { useGetGlobalState } from "hooks/useGetGlobalState";

export default function Login({ data }) {
  const user = useGetGlobalState("user");
  console.log(data);
  return (
    <React.Fragment>
      <HeadComponent title={"Login | Fixly"} />
      <LoginModule user={user} />
    </React.Fragment>
  );
}

export async function getServerSideProps(ctx) {
  const data = await validateSession(ctx);
  if (data.success) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
      props: { data: data.user },
    };
  }
  return { props: { data: null } };
}

Login.Layout = AuthLayout;
