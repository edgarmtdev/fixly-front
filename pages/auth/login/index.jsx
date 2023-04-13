import React from "react";
import AuthLayout from "../../../components/layouts/auth";
import { HeadComponent } from "../../../components/utils/head";
import LoginModule from "../../../modules/auth/login";
import { validateSession } from "services/auth";
import { useGetGlobalState } from "hooks/useGetGlobalState";

export default function Login(props) {
  const user = useGetGlobalState("user");
  return (
    <React.Fragment>
      <HeadComponent title={"Login | Fixly"} />
      <LoginModule user={user} />
    </React.Fragment>
  );
}

export async function getServerSideProps(ctx) {
  const data = await validateSession(ctx);
  if (data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: { user: data || null } };
}

Login.Layout = AuthLayout;
